let dogurl = "https://dog.ceo/api/breeds/image/random";
let total = 4;
let count = 0;
console.log("yo");
loadImages().then(() => {
  showSlides(slideIndex);
});
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
        console.log(document.getElementById("slideshow").innerHTML);
        document.getElementById("slideshow").innerHTML +=
          '<div class="mySlides fade"> <div class="numbertext">' +
          count.toString() +
          " / " +
          total.toString() +
          "</div><img src=" +
          dogo.src +
          ' style="width: 100%" /></div>';
      });
  }
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
