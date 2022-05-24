"use strict";

// MODAL
const popScreen = document.querySelector(".pop-screen");
const overlay = document.querySelector(".overlay");
const btnClosePopscreen = document.querySelector(".btn-close-pop-screen");
const btnsOpenPopscreen = document.querySelectorAll(".btn-show-popScreen");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

const openPopscreen = function (event) {
  event.preventDefault();
  popScreen.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopscreen = function () {
  popScreen.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenPopscreen.forEach((btn) =>
  btn.addEventListener("click", openPopscreen)
);

btnClosePopscreen.addEventListener("click", closePopscreen);
overlay.addEventListener("click", closePopscreen);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popScreen.classList.contains("hidden")) {
    closePopscreen();
  }
});

// Testimonials

// //Slider
// const slides = document.querySelectorAll(".slide");
// const btnLeft = document.querySelector(".slider__btn--left");
// const btnRight = document.querySelector(".slider__btn--right");
// const dotContainer = document.querySelector(".dots");

// let curSlide = 0;
// const maxSlide = slides.length;

// //Functions

// const goToSlide = function (theSlide) {
//   slides.forEach(
//     (slide, index) =>
//       (slide.style.transform = `translateX(${100 * (index - theSlide)}%)`)
//   ); // curSlide = 1: -100%, 0%, 100%, 200%
// };

// goToSlide(0);

// // Next slide
// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else curSlide++;
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// // Previous slide
// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else curSlide--;
//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// //Event handlers
// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);

// document.addEventListener("keydown", function (e) {
//   console.log(e);
//   if (e.key === "ArrowLeft") prevSlide();
//   e.key === "ArrowRight" && nextSlide();
// });

// dotContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dots__dot")) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//     activateDot(slide);
//   }
// });

//GALLERY SLIDER
const sliderMain = document.getElementById("slider-main");
const sliderItem = sliderMain.getElementsByClassName("item");

//TESTIMONIAL SLIDER
const sliderTestimonial = document.getElementById("slider-testimonial");
const testimonialItem = sliderTestimonial.getElementsByClassName("item");

//GALLERY FUNCTION
const prev = () => {
  sliderMain.prepend(sliderItem[sliderItem.length - 1]);
};
function next() {
  sliderMain.append(sliderItem[0]);
}

//TESTIMONIAL FUNCTION
function prevTestimonialBtn() {
  sliderTestimonial.prepend(testimonialItem[testimonialItem.length - 1]);
}
function nextTestimonialBtn() {
  sliderTestimonial.append(testimonialItem[0]);
}
