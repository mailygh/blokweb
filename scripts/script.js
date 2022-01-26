
console.log("inklapbutton");

var button = document.querySelector("button");
var element = document.querySelector("div");
var audio = document.getElementById("audio");

button.addEventListener("click", function() {
  var audio = new Audio("click.mp3");
  audio.play();
  element.classList.toggle("privacypolicy");
});