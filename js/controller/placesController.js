'use strict'



function onIt(){
    _createPlaces()
    renderPlaces()
}

function renderPlaces(){
    const places = getPlaces()
    const  strHTMLs = places.map(place => 
        `  <tr class="place" id="${place.id}">
                    <td>${place.name}</td>
                    <td> <button onclick="onRemovePlace('${place.id}')" class="remove-btn">X</button></td>
                </tr>`
    )

     const elplacesTable = document.querySelector('.places-table tbody')
    elplacesTable.innerHTML = strHTMLs.join('')


}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
}

function onAddPlace() {
    addPlace('daniel-house', 33, 31, 1)
    renderPlaces()

    
}


