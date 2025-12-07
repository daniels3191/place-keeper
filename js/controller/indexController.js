'use strict'


function onInitIndex(){
    onInitUser()
    renderUserSettings()
}

function renderUserSettings(){
    const userSettings = getUserSettings()
    // console.log(userSettings);
    document.querySelector('main').style.color = userSettings.txtColor
    document.querySelector('main').style.backgroundColor = userSettings.backgroundColor
    document.querySelector('main .dob').innerText = userSettings.birthDate
}