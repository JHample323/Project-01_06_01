/*     Project 01_06_01

        Author: Jaggar Hample
        Date: 8/15/18  

        Filename: script.js
*/

"use strict";
var formValidity = true;

// function to validate form
function validateForm(evt) {
    formValidity = true;
    validateRequired();
    if (formValidity === false) {
        if (evt.preventDefault) {
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }
    }
}

// function that validates required
function validateRequired() {
    var inputElement = document.querySelectorAll("input");
    var errorMsg = document.getElementById("errorText");
    var fieldset = true;
    try {
        for (var i = 0; i < inputElement.length; i++) {
            if (inputElement[i].value === "") {
                fieldset = false;
                inputElement[i].style.background = "rgb(255,233,233)";
            } else {
                inputElement[i].style.background = "white";
            }
        }
        if (fieldset === false) {
            throw "Please fill out the required fields"
        }
    } catch (msg) {
        formValidity = false;
        errorMsg.style.display = "block";
        errorMsg.innerHTML = msg;
    }
}

//function to create event listeners
function createEventListeners() {
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
    } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm);
    }

}

// load event listener
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
