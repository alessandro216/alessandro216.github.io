// ScrollBar

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 


// Percentage
const percentLabel = document.querySelector("#percent");
    const originalTitle = document.title;
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercenttext = (scrollTop / (docHeight - winHeight))*100;
      let scrollPercenttextfix = scrollPercenttext.toFixed(2);

      let scrollPercentRounded = Math.round(scrollPercent* 100) ;
      percentLabel.innerHTML = scrollPercenttextfix;
      document.title = `(${scrollPercentRounded}%) ${originalTitle}`;
    });


// WordCount (Total)
 window.onload = function() {totalCounter()};

  function totalCounter() {
    var totalCount = document.body.innerText.replace(/[!-~\d\s\u3002\u201C\uFF1F\u201D\uFF01\uFF0C\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g);
    document.getElementById("counter").innerHTML = totalCount.length;

    let pagecount = (totalCount.length) /300;
    let pagecountfix = pagecount.toFixed(0)
    document.getElementById("pagecounter").innerHTML = pagecountfix;

  }

// WordCount (Actual)

  window.onscroll = function() {actualCounter()};

  function actualCounter() {
    const totalCount = document.body.innerText.replace(/[!-~\d\s\u3002\u201C\uFF1F\u201D\uFF01\uFF0C\uFF1A]+/gi,'').match(/[\u00ff-\uffff]|\S+/g).length;
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height);
    var counterdecimals = totalCount * scrolled;
    var counter = Math.round(counterdecimals)
    document.getElementById("actualcounter").innerHTML = counter;

    var pagecounterdecimals = (totalCount * scrolled) /300;
    var pagecounter = Math.round(pagecounterdecimals)

    document.getElementById("pageactualcounter").innerHTML = pagecounter;

  }

