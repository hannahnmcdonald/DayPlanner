// Declare Variables:-----------------------------------------------------------//
var saveBtn = document.getElementsByClassName('saveBtn');
var timeContainer = document.getElementsByClassName('timeContainer');
// Hour Variables: -------------------------------------------------------------//
var hour8 = document.getElementById('hour8');
var hour9 = document.getElementById('hour9');
var hour10 = document.getElementById('hour10');
var hour11 = document.getElementById('hour11');
var hour12 = document.getElementById('hour12');
var hour13 = document.getElementById('hour13');
var hour14 = document.getElementById('hour14');
var hour15 = document.getElementById('hour15');
var hour16 = document.getElementById('hour16');
var hour17 = document.getElementById('hour17');
var hour18 = document.getElementById('hour18');
var hour19 = document.getElementById('hour19');
var hour20 = document.getElementById('hour20');
var hour21 = document.getElementById('hour21');
var hour22 = document.getElementById('hour22');

// Below is moment.js to auto-update time on webpage----------//
var update = function () {
    date = moment(new Date())
    currentDay.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    currentDay = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// Moment.js  to highlight past/present/future timeContainers------------------//

$( "saveBtn" ).click(function() {
    $( "saveBtn" ).click();
  });

// Add input to local storage--------------------------------------------------//
