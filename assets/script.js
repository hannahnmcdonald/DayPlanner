// Moment.js to auto-update time on webpage------------------------------------------//
var update = function () {
    date = moment(new Date());
    currentDay.html(date.format('dddd, MMMM Do YYYY, HH:mm:ss a'));
};

$(document).ready(function(){
    currentDay = $('#currentDay');
    update();
    setInterval(update, 1000);
});


// Moment.js  to highlight past/present/future timeContainers----------------------//

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('HH'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,rowHour;
    // TEST: console.log(rowIdString);
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color with the setColor(); function----//
    if (currentHour === rowHour) {
      setColor(row, "rgb(181,88,110, 0.55");
    } else if (currentHour < rowHour) {
      setColor(row, "rgb(255,255,255,0.45");
    } else if (currentHour > rowHour) {
      setColor(row, "rgb(85,46,109, 0.35)");
    }
  }
});

// Set color function below----------------------------------------------------------//
function setColor(element, color) {
  element.style.backgroundColor = color;
};

// Add input to local storage-------------------------------------------------------//

const button = document.querySelector('.saveBtn');
const hours = ['9', '10' , '11', '12' , '13', '14', '15', '16', '17'];
let input = document.getElementById('input');


function savePlan() {

    for (let i = 0; i < hours.length; i++) {
        console.log(hours[i]);
        // console.log(input);
    };
    localStorage.setItem('plan', JSON.stringify(hours));
    // console.log(plan);
    
};

button.addEventListener('click', function(e) {
    e.preventDefault();
    savePlan()

});

// Retrieves plan from local Storage-----------------------------------------------//
function getPlan() {
    return localStorage.getItem(JSON.parse('plans'));
};

getPlan();
