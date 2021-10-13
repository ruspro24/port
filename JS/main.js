$(window).on("load", function () {
    $("#header").vide("./video/Autumn forest.mp4");
  });
  let h = document.getElementById("h");
  let m = document.getElementById("m");
  let s = document.getElementById("s");
  setInterval(tick, 1000);
  function tick() {
    let d = new Date();
    let hours = 23 - d.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = 59 - d.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = 59 - d.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    h.innerHTML = hours + ":";
    m.innerHTML = minutes + ":";
    s.innerHTML = seconds;
  }

  
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       100,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
