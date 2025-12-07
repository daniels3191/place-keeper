'use strict'



const USER_SETTINGS_STORAGE_KEY = 'userSettingsData'

let gUserSettings


// function createUserSettings(email, elTxtColor){
//     gUserSettings = loadFromStorage(USER_SETTINGS_STORAGE_KEY)
//     if(!gUserSettings || gUserSettings.lrngth === 0){
//         gUserSettings = {
//     email: 'email.name@gbai.com',
//     txtColor: '#0000ff',
//     }
// }
// }

function createUserSettings(){
    
    gUserSettings = loadFromStorage(USER_SETTINGS_STORAGE_KEY)
    if (!gUserSettings || !gUserSettings.email) {
        gUserSettings = {
        email: "email.name@gbail.com",
        txtColor: "#0000ff",
        backgroundColor: "#a8a8bd",
        birthDate: "1992-03-28" ,
        age: "18",
        birthTime: "19:03"
    }
        
    }
    _saveUserSettings()

}

function changeUserSettings(email, txtColor, backgroundColor, birthDate, age, birthTime){
    gUserSettings = {
        email,
        txtColor,
        backgroundColor,
        birthDate,
        age,
        birthTime,
    }
    _saveUserSettings()
}

function _saveUserSettings() {
    saveToStorage(USER_SETTINGS_STORAGE_KEY, gUserSettings)

}

function getUserSettings(){
    return structuredClone(gUserSettings)

}