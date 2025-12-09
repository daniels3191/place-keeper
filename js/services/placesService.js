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
            _createPlace('Egypt', 27.09336363811584, 29.871826171875, 5),
            _createPlace('Turkite', 38.989302551359515, 35.4364013671875, 3)
        ]
    }
    _savePlaces()
}

function _createPlace(name, lat, lng, zoom = 5) {
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




