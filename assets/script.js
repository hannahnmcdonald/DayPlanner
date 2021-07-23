// Declare Variables:-----------------------------------------------------------//
var saveBtn = document.getElementsByClassName('saveBtn');
var btnContainer = document.getElementsByClassName('btnContainer');
var time = document.getElementsByClassName('time');

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
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('HH'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "rgb(181,88,110, 0.55");
    } else if (currentHour < rowHour) {
      setColor(row, "rgb(255,255,255,0.45");
    } else if (currentHour > rowHour) {
      setColor(row, "rgb(85,46,109, 0.45)");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
};

// // Add input to local storage--------------------------------------------------//


