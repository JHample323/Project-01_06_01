/*     Project 01_06_01

        Author: Jaggar Hample
        Date: 8/15/18  

        Filename: script.js
*/

"use strict";
var formValidity = false;

// function to validate form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}

//function to create event listeners
function createEventListeners() {
    window.addEventListener("submit", validateForm);
}

// load event listener
window.addEventListener("load", createEventListeners);
