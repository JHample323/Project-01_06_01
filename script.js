/*     Project 01_06_01

        Author: Jaggar Hample
        Date: 8/15/18  

        Filename: script.js
*/

"use strict"

var formValidity = true;

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

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.addEventListener("onload", setUpPage);
}
