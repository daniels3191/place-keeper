'use strict'
var gMap
var gMarkers

function onIt() {
    _createPlaces()
    renderPlaces()
    initMap();
}

function renderPlaces() {
    const places = getPlaces()
    const strHTMLs = places.map(place =>
        `  <tr class="place" id="${place.id}">
                    <td>${place.name}</td>
                    <td> <button onclick="onRemovePlace('${place.id}')" class="remove-btn">X</button></td>
                    <td> <button onclick="onPanToPlace('${place.id}')" class="remove-btn">GO</button></td>
                </tr>`
    )

    const elplacesTable = document.querySelector('.places-table tbody')
    elplacesTable.innerHTML = strHTMLs.join('')
}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
    renderMarkers()
}

async function initMap() {
    //  Request the needed libraries.
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('maps'),
        google.maps.importLibrary('marker'),
    ]);
    // Get the gmp-map element.
    const mapElement = document.querySelector('gmp-map');
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    gMap = innerMap
    // Set map options.
    innerMap.setOptions({
        mapTypeControl: false,
    });

    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, innerMap.getZoom())
        renderPlaces()
        renderMarkers()
    })
    // Add a marker positioned at the map center (Uluru).
    const marker = new AdvancedMarkerElement({
        map: gMap,
        position: mapElement.center,
        title: 'Eilat',
    });

    renderMarkers()

}


function renderMarkers() {
    const places = getPlaces()
    if (gMarkers) gMarkers.forEach(marker => marker.setMap(null))

    gMarkers = places.map(place => {
        return new google.maps.marker.AdvancedMarkerElement({
            position: place,
            map: gMap,
            title: place.name
        })
    })
}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    const mapElement = document.querySelector('gmp-map');
    const innerMap = mapElement.innerMap;
    innerMap.setCenter({ lat: place.lat, lng: place.lng })
    innerMap.setZoom(place.zoom)
}

function onDownLoadCSV(elDownLoadCsvBtn) {
    const places = getPlaces()
    const titleKeys = Object.keys(places[0])
    const refinedData = []
    refinedData.push(titleKeys)
    places.forEach(item => {
        refinedData.push(Object.values(item))
    })
    let csvContent = ''

    refinedData.forEach(row => {
        csvContent += row.join(',') + '\n'

    })
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)

    elDownLoadCsvBtn.href = 'data:text/csv;charset=utf-8,' + csvContent
    
}
