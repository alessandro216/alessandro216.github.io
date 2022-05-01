var x;
var startstop = 0;

function startStop() { /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("start").src = "icons/pause-button.svg";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Stop";
    document.getElementById("start").src = "icons/play-button.svg";
    startstop = 0;
    stop();
  
    
  }

}


function start() {
  x = setInterval(timer, 1);
} /* Start */

function stop() {
  clearInterval(x);
} /* Stop */

var milisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;
var hour = 0;

/* Contains and outputs returned value of  function checkTime */

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* Output variable End */


function timer() {
  /* Main Timer */


  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;
  
  if (milisec == 100) {
    milisec = 0;
    sec = ++sec*0.5;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;

  }


  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;

}


/* Adds 0 when value is <10 */


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {




  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";

}

  /*Timer Invisible Button*/
function TimeInvisible() {
  var x = document.getElementById('myTimer');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
    document.getElementById("hider").src = "icons/toggle_on-button.svg"; 

  } else {
    x.style.visibility = 'hidden';
    document.getElementById("hider").src = "icons/toggle_off-button.svg"; 
  }
}
