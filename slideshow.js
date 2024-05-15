var slideIndex = 1;
showSlides(slideIndex);
var timer = null; // This will hold our interval timer

function plusSlides(n) {
  clearTimeout(timer); // Clear previous timer when manual navigation is used
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer); // Clear previous timer when dot navigation is used
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // Set the timer for the next slide
  timer = setTimeout(function() {
    plusSlides(1);
  }, 5000); // Change image every 1000 milliseconds (1 second)
}

// Initialize the slideshow automatically
showSlides(slideIndex);
