const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-tile");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//translate image from showing last image clone to the actual first image
let counter = 1; //pertains to first image
// const size = carouselImages[1].clientWidth;
const size = 310; //need to hard code since clientWidth inexplicably returns 39?

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//event listeners
nextBtn.addEventListener("click", () => {
  //if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
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
