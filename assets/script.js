// Declare Variables:-----------------------------------------------------------//
var saveBtn = document.getElementsByClassName('saveBtn');
var timeContainer = document.getElementsByClassName('timeContainer');
// Hour Variables: -------------------------------------------------------------//
var hour9 = document.getElementById('hour9');
var hour10 = document.getElementById('hour10');
var hour11 = document.getElementById('hour11');
var hour12 = document.getElementById('hour12');
var hour13 = document.getElementById('hour13');
var hour14 = document.getElementById('hour14');
var hour15 = document.getElementById('hour15');
var hour16 = document.getElementById('hour16');
var hour17 = document.getElementById('hour17');


// Below is moment.js to auto-update time on webpage----------//
var update = function () {
    date = moment(new Date())
    currentDay.html(date.format('dddd, MMMM Do YYYY, HH:mm:ss a'));
};

$(document).ready(function(){
    currentDay = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// Moment.js  to highlight past/present/future timeContainers------------------//

// if (moment(data.update_script, 'YYYY-MM-DD h:mm:ss') < moment()) {



// $( "saveBtn" ).click(function() {
//     $( "saveBtn" ).click();
//   });




// Add input to local storage--------------------------------------------------//
