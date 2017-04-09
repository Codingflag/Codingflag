var daysDiv = document.getElementById('days');
var hourDiv = document.getElementById('hours');
var minsDiv = document.getElementById('mins');
var secsDiv = document.getElementById('secs');
var compareDate = new Date();
compareDate.setMinutes(compareDate.getMinutes()+1700);
/*
Set specific date like,
var compareDate = new Date("12/31/16 23:59:00");
*/
var countDown = function() {
  var now = new Date().getTime();
  var difference = compareDate.getTime() - now;
  if (difference <= 0) {
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    daysDiv.innerText = days;
    hourDiv.innerText = hours;
    minsDiv.innerText = minutes;
    secsDiv.innerText = seconds;
  }
}
var timer = setInterval(countDown, 1000);