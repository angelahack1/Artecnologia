/* Java Script Utilities for Artecnología */
/* Author: Ángela López Mendoza           */
/* Copyright AixKare 2023                 */
/* AixKare/Artecnología 11/2023           */

$(function() {
    console.log("Validation of form is gonna be loaded...");
    addValidationInClient();
    console.log("Validation of form loaded OK.");
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(form) {
    var isValid = true;
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.type === "textarea" && element.value.trim() === "") {
            alert(_langContainer.getTextareaWrongContent());
            isValid = false;
            break;
        }

        if (element.type === "email" && element.value.length === 0 ) {
            alert(_langContainer.getEmailEmptyContent())
            isValid = false;
            break;
        } else if(element.type === "email") {
            if(!validateEmail(element.value)) {
                alert(_langContainer.getEmailWrongContent());
                isValid = false;
            }
        }
    }
    return isValid;
}

function handleFormSubmit(event) {
   var form = event.target;
   var data = {
     email: form.formControlMail.value,
     comment: form.formControlTextarea.value
   };
    window.top.location.href = form.getAttribute('action')+'&from=artecnologia&email='+form.formControlMail.value+'&comment='+form.formControlTextarea.value;
 }

 function addValidationInClient() { 
    var form = document.getElementById("contactForm");

    if(typeof form != 'undefined' && form != null) {
        console.log("Validation of form is gonna be loaded...");
        form.addEventListener("submit", function(event) {
            if (!validateForm(form)) {
                event.preventDefault();
            } else {
                handleFormSubmit(event);
                event.preventDefault();
            }
        });
        console.log("Validation of form loaded OK.");
    }
}