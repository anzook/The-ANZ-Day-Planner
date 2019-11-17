$("#dateSelect").attr("value", moment().format('LL'));
$("#currentDay").text("Time: " +moment().format('LT'));
$("#currentTime").text("Date: "+ moment().format('LL'));

function timerSet(){
    //math to get miliseconds until end of hour
    var timerEnd = moment().endOf('hour');
    var now = moment();
    var timer = timerEnd.diff(now);
    console.log(timer);
    return timer;
};

function setClass(time){  //return the class for the hour passed
//gets current hour
// var hours = moment().hours();
var hours = 13;

// console.log(hours);
var timeH = parseInt(time);  //just in case
// console.log(timeH);
var classSet = "";
if ( timeH < hours ){
    classSet = "past";
} else if ( timeH === hours ) {
    classSet = "present";
} else if ( timeH > hours ) {
    classSet = "future";
}
return classSet;  //returns class string
};

function setCurrent(){
    //removeClass()
    //setClass(time);
    //use setClass(hour);
}

setInterval(function () {   //initializes timer
setCurrent();  //updated fields on the hour

}, timerSet());


function createFields() {
for (var i = 9; i < 18; i++) { //counter for i to be the hour
var timePill = $("<div>");
var timeDiv = $("<div>");
var fieldDiv = $("<textarea>");
var saveBtn = $("<button>");

timeDiv.text(i + ":00").addClass("hour col-2");
fieldDiv.addClass("inputField col-8").addClass(setClass(i));
saveBtn.addClass("saveBtn col-xs-2").text("Save");
timePill.addClass("row");
timePill.append(timeDiv).append(fieldDiv).append(saveBtn);
// timePill.addClass("row")
$("#main").append(timePill);
}
}

createFields();
