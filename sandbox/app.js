const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-tile");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

//translate image from showing last image clone to the actual first image
let counter = 1; //pertains to first image
const size = carouselSlide.offsetWidth;

(() => console.log(size))();
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//event listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id == "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  } else if (carouselImages[counter].id == "first-clone") {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
