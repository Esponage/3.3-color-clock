function startTime() {
var time = new Date();
var hh = time.getHours();
var mm = time.getMinutes();
var ss = time.getSeconds();
console.log((ss / 60) * 100);
document.querySelector(".hex-clock").textContent = "#" + zero(hh.toString(16)) + zero(mm.toString(16)) + zero(ss.toString(16));
document.querySelector(".digital-clock").textContent = zero(hh) + ":" + zero(mm) + ":" + zero(ss);
  function zero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
document.querySelector('hr').style.width =((ss/60) * 1000) + "px";

var hoursString = hh.toString(16);
var minutesString = mm.toString(16);
var secondsString = ss.toString(16);
var hexString = document.querySelector('body').style.background = "#" + hoursString + minutesString + secondsString;

}


startTime();
setInterval(startTime, 1000);
