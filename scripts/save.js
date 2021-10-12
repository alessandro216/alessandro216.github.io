function checkStorageSupport() {
  var test = "test";
  try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
  } catch(e) {
      return false;
  }
}

function getTotalHeight() {
  return document.body.clientHeight;
}

function getSavedPercent() {
  var percent = storageSupported ? loadFromStorage() : loadFromCookie();
  return (percent == null || percent == "") ? 0 : percent;
}


/******* Save *******/

function saveInStorage() {
  localStorage.setItem("scrollPercent", (document.documentElement.scrollTop / getTotalHeight()));
  
}

function saveCookie() {
  var expDate = new Date();
  expDate.setDate(expDate.getDate() + 7); // start over if it's been more than ___ days
  document.cookie = "scrollPercent=" + (document.documentElement.scrollTop / getTotalHeight())
              + "; " + expDate;         
}


/******* Load *******/

function loadFromStorage() {
  return localStorage.getItem("scrollPercent");
}

function loadFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)scrollPercent\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}


/******* Remove *******/
/**The saved item is removed regardless of the user's choice (to return to the last spot or not), 
 so that the prompt doesn't show up every time the page is reloaded (which can get annoying).**/

// function removeFromStorage() {
//   localStorage.removeItem("scrollPercent");
// }

// function removeCookie() {
//   document.cookie = "scrollPercent=''";
// }



/******* Handler *******/

var saveButton = document.getElementById("saveButton");
var saved = document.getElementById("saved");
var takeMeToSave = document.getElementById("takeMeToSave");
var cordinateCont = "";
var cordinateBtn = ""
var boxMove = document.getElementById("box");


takeMeToSave.style.display = "none"
saveButton.onclick = function(e) {
  storageSupported ? saveInStorage() : saveCookie();
  saved.style.visibility = "visible";
  setTimeout(function() {
    saved.style.visibility = "hidden";
  }, 1500);
  cordinateCont = e.pageY; //where is the click according to content including scroll content 
  cordinateBtn = e.clientY; //cordinateBtn is where it is clicked inside btn
  takeMeToSave.style.display = "block";
  boxMove.style.top = cordinateCont +60 - cordinateBtn + 'px';
};

takeMeToSave.onclick = function() {
  storageSupported ? saveInStorage() : saveCookie();
  window.scrollTo({
    top: cordinateCont + 60 - cordinateBtn,
    left: 0,
    behavior: 'smooth'
  });
  //1 is borderWidth of btn and 50, cordinateBtn, 1 is subtracted from position to remove wherever it is clicked on btn and only change with respect to top of window screen of content
};



/******* Logic *******/

var storageSupported = checkStorageSupport(),
  percent = getSavedPercent();

if (percent > 0) {
  if (confirm("Would you like to continue reading where you left off?")) {
      document.documentElement.scrollTop = percent * getTotalHeight();
  }
  storageSupported ? removeFromStorage() : removeCookie();
}