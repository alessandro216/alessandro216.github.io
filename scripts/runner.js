function start() {
  x = setInterval(timer, 10);
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
  
  if (milisec == 60) {
    milisec = 0;
    sec = ++sec;
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


    $(document.body).on('mouseup', function(){
        var text = document.getSelection().toString();
        var length= document.getSelection().toString().length;  /*** Mit Sonderzeichen! ***/
        
       // full way
      //   var lengthregulate = document.getSelection().toString().replace(/[!-~\d\s\u3002\u201C\uFF1F\u201D\uFF01\uFF0C\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g).length;
        
        // anacreon way
        var lengthregulate = document.getSelection().toString().replace(/[!-~\d\s\u3002\uFF1F\uFF01\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g).length;engthregulate = document.getSelection().toString().replace(/[!-~\d\s\u3002\u201C\uFF1F\u201D\uFF01\uFF0C\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g).length;
        
        
        selectednumber.style.visibility = "visible";
        setTimeout(function() {
        selectednumber.style.visibility = "hidden";
         }, 2100);

        // selectedtext.style.visibility = "visible";
        //  setTimeout(function() {
        // selectedtext.style.visibility = "hidden";
        //   }, 2100);
         
var decsec = ((sec *100)/60);
var dechour = (hour *60)
    
        document.getElementById("selectednumber").innerHTML = lengthregulate;
        
        document.getElementById("runner").innerHTML = (lengthregulate / (Math.floor(dechour) + Math.floor(min) + ((Math.floor(decsec))/100))).toFixed(1);

        runner.style.visibility = "visible";
        setTimeout(function() {
        runner.style.visibility = "hidden";
         }, 2100);
        
         runnermin.style.visibility = "visible";
         setTimeout(function() {
         runnermin.style.visibility = "hidden";
          }, 2100);

    });
