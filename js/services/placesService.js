'use strict'

const PLACES_STORAGE_KEY = 'placesDB'
let gPlaces


function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)
    _savePlaces()
    

}

function addPlace(name, lat, lng, zoom) {
   const newPlace = _createPlace(name, lat, lng, zoom)
   gPlaces.push(newPlace)
    _savePlaces()
}

function getPlaceById(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    return gPlaces[placeIdx]
}


function _createPlaces() {

    gPlaces = loadFromStorage(PLACES_STORAGE_KEY )
    if (!gPlaces || gPlaces.length == 0) {
        
        gPlaces = [
            _createPlace('Pukis house', 32.1416, 34.831213),
            _createPlace('lorem house', 31.1416, 30.831213)
        ]
    }
    _savePlaces()
}

function _createPlace(name, lat, lng, zoom = 1) {
      return {
        id: makeId(),
        name,
        lat,
        lng,
        zoom 
    }
}

function _savePlaces() {
    saveToStorage(PLACES_STORAGE_KEY, gPlaces)

}

function getPlaces(){
    return structuredClone(gPlaces)

}

