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

const handleSaveHour = (hour) => {
    const val = document.getElementById('hour').value;
    localStorage.setItem(`hour:${hour}`, val);
};

const handleSavePlan = () => {
    const inputs = Array.from(document.getElementsByClassName('hourinput'));
    const plan = inputs.map((input) => input.value);
    localStorage.setItem('plan', JSON.stringify(plan));
}

window.addEventListener('load', () => {
    const inputs = document.getElementsByClassName('hourinput');
    const planStr = localStorage.getItem('plan');
    const plan = JSON.parse(planStr);

    // TEST:console.log(plan);

    if (plan) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = plan[i];
        }
    } else {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = localStorage.getItem(`hour:${inputs[i].id}`);
        }
    }
});