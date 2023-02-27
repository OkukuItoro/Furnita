"use strict";

// MODAL
/*
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
*/

// button locate function
function goToPage(e) {
  const page = e.target.dataset.pageName;
  return window.location.assign(page);
}

//GALLERY SLIDER
const sliderGallery = document.getElementById("slider__content--gallery");
const sliderItem = sliderGallery.getElementsByClassName(
  "slider__content--item"
);

//TESTIMONIAL SLIDER
const sliderTestimonial = document.getElementById(
  "slider__content--testimonial"
);
const testimonialItem = sliderTestimonial.getElementsByClassName("testimonial");

//GALLERY FUNCTION
const prev = () => {
  sliderGallery.prepend(sliderItem[sliderItem.length - 1]);
  sliderGallery.style.transition = "1s";
};
function next() {
  sliderGallery.append(sliderItem[0]);
  sliderGallery.style.transition = "1s";
}

//TESTIMONIAL FUNCTION
function prevTestimonialBtn() {
  sliderTestimonial.prepend(testimonialItem[testimonialItem.length - 1]);
}
function nextTestimonialBtn() {
  sliderTestimonial.append(testimonialItem[0]);
}

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowLeft") prevTestimonialBtn();
  e.key === "ArrowRight" && nextTestimonialBtn();
});

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowLeft") prev();
  e.key === "ArrowRight" && next();
});

/* NAVIGATION */

const mobileNavBtnOpen = document.getElementById("mobile-navbar__open");
const mobileNavBtnExit = document.getElementById("mobile-navbar__exit");
const navBarItems = document.querySelector(".navbar__items");

if (window.innerWidth < 990) {
  const toggleNav = () => {
    navBarItems.style.display = "none";
    mobileNavBtnOpen.style.display = "block";
    mobileNavBtnExit.style.display = "none";
  };

  mobileNavBtnOpen.addEventListener("click", () => {
    navBarItems.style.display = "flex";
    mobileNavBtnExit.style.display = "block";
  });
  mobileNavBtnExit.addEventListener("click", () => {
    toggleNav();
  });
  navBarItems.addEventListener("click", () => {
    toggleNav();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

/** HEADER COMPONENTS ANIMATION SELECTORS */
const heroImage = document.querySelector(".header__hero");
const navbar = document.querySelector(".header__navbar");
const heroTextBox = document.querySelector(".hero__text-box");
const heroCta = document.querySelector(".header__hero--content__cta");

/** HOME-INTERIOR COMPONENTS ANIMATION SELECTORS */
const homeInteriorPhotos = document.querySelector(".home-interior__photos");
const homeInteriorHeaderText = document.querySelector(
  ".home-interior__heading"
);
const homeInteriorBodyContent = document.querySelector(
  ".home-interior__text-content"
);

/** KITCHEN-INTERIOR COMPONENTS ANIMATION SELECTORS */
const kitchenInteriorPhotos = document.querySelector(
  ".kitchen-interior__photos"
);
const kitchenInteriorHeaderText = document.querySelector(
  ".kitchen-interior__heading"
);
const kitchenInteriorBodyContent = document.querySelector(
  ".kitchen-interior__text-content"
);

/** TOP DESIGN COMPONENTS ANIMATION SELECTORS */
const topDesignsHeading = document.querySelector(".top-designs__heading");
const topDesignsSlider = document.querySelector(".top-designs__slider");

/** BEDROOM-INTERIOR COMPONENTS ANIMATION SELECTORS */
const bedroomInteriorPhotos = document.querySelector(
  ".bedroom-interior__photos"
);
const bedroomInteriorHeaderText = document.querySelector(
  ".bedroom-interior__heading"
);
const bedroomInteriorBodyContent = document.querySelector(
  ".bedroom-interior__text-content"
);

/** EXTERIOR COMPONENTS ANIMATION SELECTORS */
const exteriorPhotos = document.querySelector(".exterior__photos");
const exteriorHeaderText = document.querySelector(".exterior__heading");
const exteriorBodyContent = document.querySelector(".exterior__text-content");

/** GALLERY SLIDER COMPONENTS ANIMATION SELECTORS */
const sliderGalleryHead = document.querySelector(".gallery__slider-head");
const sliderGalleryItems = Array.from(
  document.getElementsByClassName("gallery__item")
);

/** ABOUT COMPONENTS ANIMATION SELECTORS */
const aboutContactLogos = document.querySelector(".about__contact-logos");
const aboutHeading = document.querySelector(".about__text-box--heading");
const aboutDescription = document.querySelector(
  ".about__text-box--description"
);
const aboutButton = document.querySelector(".about__button");

/** CREDITS COMPONENTS ANIMATION SELECTORS */
const creditPhoto = document.querySelector(".credits__photo-container");
const creditCards = Array.from(
  document.getElementsByClassName("credits__cards")
);

/** TESTIMONIALS SLIDER COMPONENTS ANIMATION SELECTORS */
const sliderTestimonialsHead = document.querySelector(
  ".testimonials__slider-head"
);
const sliderTestimonialItems = Array.from(
  document.getElementsByClassName("testimonial")
);

/** MAIL SUBSCRIPTION COMPONENTS ANIMATION SELECTORS */
const mailSubscriptionText = document.querySelector(
  ".mail-subscription__cta--text-heading"
);
const mailSubscriptionIcons = Array.from(
  document.getElementsByClassName(" mail-subscription__icons--position")
);
const mailSubscriptionForm = document.querySelector(
  ".mail-subcription__cta--form"
);

/** CONTACT COMPONENTS ANIMATION SELECTORS */
const contactIntro = document.querySelector(".contact__intro");
const contactItems = Array.from(
  document.getElementsByClassName("contact__items")
);

/** SECTION SELECTORS */
const sectionHeader = document.querySelector(".section__header");

const sectionHomeInterior = document.querySelector(".section__home-interior");

const sectionKitchenInterior = document.querySelector(
  ".section__kitchen-interior"
);

const sectionTopDesigns = document.querySelector(".section__top-designs");

const sectionBedroomInterior = document.querySelector(
  ".section__bedroom-interior"
);

const sectionExterior = document.querySelector(".section__exterior");

const sectionGallery = document.querySelector(".section__gallery");

const sectionAbout = document.querySelector(".section__about");

const sectionCredits = document.querySelector(".section__credits");

const sectionTestimonials = document.querySelector(".section__testimonials");

const sectionMailSubscription = document.querySelector(
  ".section__mail-subscription"
);
const sectionContact = document.querySelector(".section__contact");

const sections = [
  sectionHeader,
  sectionHomeInterior,
  sectionKitchenInterior,
  sectionTopDesigns,
  sectionBedroomInterior,
  sectionExterior,
  sectionGallery,
  sectionAbout,
  sectionCredits,
  sectionTestimonials,
  sectionMailSubscription,
  sectionContact,
];

const animation = (entries) => {
  entries.forEach((entry) => {
    // hero
    if (
      entry.target.classList.contains("section__header") &&
      entry.isIntersecting
    ) {
      heroImage.classList.add("animate-header__hero-image");
      navbar.classList.add("animate-header__navbar");
      heroTextBox.classList.add("animate-header__text-box");
      heroCta.classList.add("animate-header__cta");
    }

    // home interiors
    if (
      entry.target.classList.contains("section__home-interior") &&
      entry.isIntersecting
    ) {
      homeInteriorPhotos.classList.add("animate-int-ex__photo-container");
      homeInteriorHeaderText.classList.add("animate-int-ex__header");
      homeInteriorBodyContent.classList.add("animate-int-ex__text-body");
    }

    // kitchen interiors
    if (
      entry.target.classList.contains("section__kitchen-interior") &&
      entry.isIntersecting
    ) {
      kitchenInteriorPhotos.classList.add("animate-int-ex__photo-container");
      kitchenInteriorHeaderText.classList.add("animate-int-ex__header");
      kitchenInteriorBodyContent.classList.add("animate-int-ex__text-body");
    }

    // top designs
    if (
      entry.target.classList.contains("section__top-designs") &&
      entry.isIntersecting
    ) {
      topDesignsHeading.classList.add("animate-top-designs");
      topDesignsSlider.classList.add("animate-top-designs__slider");
    }

    // bedroom interiors
    if (
      entry.target.classList.contains("section__bedroom-interior") &&
      entry.isIntersecting
    ) {
      bedroomInteriorPhotos.classList.add("animate-int-ex__photo-container");
      bedroomInteriorHeaderText.classList.add("animate-int-ex__header");
      bedroomInteriorBodyContent.classList.add("animate-int-ex__text-body");
    }

    // exteriors
    if (
      entry.target.classList.contains("section__exterior") &&
      entry.isIntersecting
    ) {
      exteriorPhotos.classList.add("animate-int-ex__photo-container");
      exteriorHeaderText.classList.add("animate-int-ex__header");
      exteriorBodyContent.classList.add("animate-int-ex__text-body");
    }

    // gallery
    if (
      entry.target.classList.contains("section__gallery") &&
      entry.isIntersecting
    ) {
      sliderGalleryHead.classList.add("animate-slide__slider-head");
      sliderGalleryItems.forEach((item) => {
        item.classList.add("animate-slide__item");
      });
    }

    // about
    if (
      entry.target.classList.contains("section__about") &&
      entry.isIntersecting
    ) {
      aboutContactLogos.classList.add("animate-about__contact-logos");
      aboutHeading.classList.add("animate-about__heading");
      aboutDescription.classList.add("animate-about__description");
      aboutButton.classList.add("animate-about__description");
    }

    // credits
    if (
      entry.target.classList.contains("section__credits") &&
      entry.isIntersecting
    ) {
      creditPhoto.classList.add("animate-credits__photo");
      creditCards.forEach((card) => {
        card.classList.add("animate-credits__card");
      });
    }

    // testimonials
    if (
      entry.target.classList.contains("section__testimonials") &&
      entry.isIntersecting
    ) {
      sliderTestimonialsHead.classList.add("animate-slide__slider-head");
      sliderTestimonialItems.forEach((item) => {
        item.classList.add("animate-slide__item");
      });
    }

    // mail subscription
    if (
      entry.target.classList.contains("section__mail-subscription") &&
      entry.isIntersecting
    ) {
      mailSubscriptionText.classList.add("animate-mail-subscription__text");
      mailSubscriptionIcons.forEach((icon) => {
        icon.classList.add("animate-mail-subscription__icon");
      });
      mailSubscriptionForm.classList.add("animate-mail-subscription__form");
    }

    // contact
    if (
      entry.target.classList.contains("section__contact") &&
      entry.isIntersecting
    ) {
      contactIntro.classList.add("animate-contact__intro");
      contactItems.forEach((item) => {
        item.classList.add("animate-contact__links");
      });
    }
  });
};

const observer2 = new IntersectionObserver(animation);
sections.forEach((div) => observer2.observe(div));

// Top-designs Slider
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");
const slider = document.querySelector(".slider");

let curSlide = 0;
const maxSlide = slides.length;

// slides.forEach(
//   (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
// ); //0%, 100%, 200%, 300%

//OR goToSlide(0);

//Functions
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);

const goToSlide = function (theSlide) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - theSlide)}%)`)
  ); // curSlide = 1: -100%, 0%, 100%, 200%
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};

// Auto slide
setInterval(() => {
  nextSlide();
}, 5000);

//Event handlers
// btnRight.addEventListener("click", nextSlide);
// btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
