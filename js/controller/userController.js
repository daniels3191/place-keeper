'use strict'

function onInitUser() {
    createUserSettings()
}

function onFormSubmit(ev){
    ev.preventDefault()
    const elEmail = document.getElementById("email")
    const elTxtColor = document.getElementById("txt-color")
    const elBackgroundColor = document.getElementById("background-color")
    const elDateOfBirth = document.getElementById("dob")
    const elAge= document.getElementById("sAge")
    const elBirthTime = document.getElementById("birth-time")
    changeUserSettings(elEmail.value,
                        elTxtColor.value,
                        elBackgroundColor.value,
                        elDateOfBirth.value,
                        elAge.value,
                        elBirthTime.value)

}

function showAge(age){

    document.getElementById("age").innerText = age
}