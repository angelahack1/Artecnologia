/* Java Script Utilities for Artecnología */
/* Author: Ángela López Mendoza           */
/* Copyright Artecnología 2023            */
/* AixKare/Artecnología 11/2023           */

(function() {
    console.log("Validation of form is gonna be loaded...");
    addValidationInClient();
    console.log("Validation of form loaded OK.");
})();

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
            alert("Campo de texto vacio: Porfavor introduzca el contenido de su consulta/duda/comentario...");
            isValid = false;
            break;
        }

        if (element.type === "email" && element.value.length === 0 ) {
            alert("Campo de correo vacio: Porfavor introduzca su correo electrónico en el campo de correo...");
            isValid = false;
            break;
        } else if(element.type === "email") {
            if(!validateEmail(element.value)) {
                alert("Campo de correo incorrecto: Porfavor introduzca correctamente su correo electrónico...");
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

   var jsonData = JSON.stringify(data);
   var xhr = new XMLHttpRequest();
   xhr.open('POST', 'http://'+form.getAttribute('action'), true);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('Success!');
      }
    };

    xhr.send(jsonData);
    console.log("Data sent: ");
    console.log(jsonData);
 }

function addValidationInClient() { 
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        if (!validateForm(form)) {
            event.preventDefault();
        } else {
            handleFormSubmit(event);
            event.preventDefault();
        }
    });
}