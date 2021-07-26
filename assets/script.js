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

// Moment.js  to highlight past/present/future rows----------------------//

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

// Add input text to local storage---------------------------------------------------//

$(".saveBtn").on("click", function () {
  const row = $(this).closest(".row") // see https://api.jquery.com/closest/

  // Get the values
  const hourinput = row.find(".hourinput").val();
  const hour = row.attr('id');

  // Save data in local storage
  localStorage.setItem(hour, hourinput);
});

// Retrieve from Local Storage:------------------------------------------------------//
  $('#9 .hourinput').val(localStorage.getItem('9'));
  $('#10 .hourinput').val(localStorage.getItem('10'));
  $('#11 .hourinput').val(localStorage.getItem('11'));
  $('#12 .hourinput').val(localStorage.getItem('12'));
  $('#13 .hourinput').val(localStorage.getItem('13'));
  $('#14 .hourinput').val(localStorage.getItem('14'));
  $('#15 .hourinput').val(localStorage.getItem('15'));
  $('#16 .hourinput').val(localStorage.getItem('16'));
  $('#17 .hourinput').val(localStorage.getItem('17'));