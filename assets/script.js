
// Below is moment.js function to auto-update time on webpage----------//
var update = function () {
    date = moment(new Date())
    currentDay.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    currentDay = $('#currentDay')
    update();
    setInterval(update, 1000);
});
