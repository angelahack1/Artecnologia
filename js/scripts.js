/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
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
