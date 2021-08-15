let dogurl = "https://dog.ceo/api/breeds/image/random";
let total = 4;
let count = 0;
var slideIndex = 1;
let size = window.innerHeight.toString() + "px";
console.log(window.innerHeight);
document.getElementById("plaximg").style.minHeight = size;
async function loadImages() {
  for (i = 0; i < total; i++) {
    await fetch(dogurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let dogo = document.createElement("img");
        count += 1;
        dogo.src = myJson.message;
        dogo.width = 200;
        dogo.height = 200;
        document.getElementById("slideshow").innerHTML +=
          '<div class="mySlides fade"> <div class="numbertext">' +
          count +
          " / " +
          total +
          "</div><img src=" +
          dogo.src +
          ' style="width: 100%; min-height: 600px" /></div>';
      });
  }
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  }

loadImages().then(function(){
  showSlides(slideIndex);
});
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
