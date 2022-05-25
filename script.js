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

//NAVIGATION
const mobileBtn = document.getElementById("mobile-cta");
const mobileBtnExit = document.getElementById("mobile-exit");
const navBar = document.querySelector(".navbar");

const toggleNav = () => {
  navBar.style.display = "none";
  mobileBtn.style.display = "block";
};

mobileBtn.addEventListener("click", () => {
  navBar.style.display = "block";
  mobileBtn.style.display = "none";
});
mobileBtnExit.addEventListener("click", () => {
  toggleNav();
});
navBar.addEventListener("click", () => {
  toggleNav();
});
