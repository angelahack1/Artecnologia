/*!
* Start Bootstrap - Artecnología alias Aixkare v8.0.0 (https://aixkare.com)
* Copyright Artecnología 2023
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    if(typeof listHoursArray != 'undefined' && 
       typeof listHoursArray[new Date().getDay()] != 'undefined' && 
       typeof listHoursArray[new Date().getDay()].classList != 'undefined') {
        listHoursArray[new Date().getDay()].classList.add(('today'));
    }
})
