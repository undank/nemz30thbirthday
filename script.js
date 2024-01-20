//Fetching audio
var sound = new Audio();
sound.src = "youare30normalised.mp3";
var eff = document.getElementById('parent');


(function() {
  function $(id) {
    return document.getElementById(id);
  }

var card = $('card'),
openB = $('open'),
closeB = $('close'),
timer = null;

//Opening a wrap
console.log('wat', card);
openB.addEventListener('click', function () {
  sound.currentTime = 0;
  sound.play();
  sound.loop = true;
  card.setAttribute('class', 'open-half');
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    card.setAttribute('class', 'open-fully');
    document.getElementById('inside-image').style.display = 'block';
    timer = null;

  }, 1000);
  timer = setTimeout(function () {
  eff.setAttribute("style","visibility: visible;");
  }, 2000);
  
});

//Closing a wrap
closeB.addEventListener('click', function () {
  sound.pause();
  eff.setAttribute("style","visibility: hidden;");
  card.setAttribute('class', 'close-half');
  document.getElementById('inside-image').style.display = 'none';
  if (timer) clearTimerout(timer);
  timer = setTimeout(function () {
    card.setAttribute('class', '');
    timer = null;
     
  }, 1000);
});
}());

