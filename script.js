/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.getElementById("prevTestimonial");
const nextButton = document.getElementById("nextTestimonial");
const dotsContainer = document.getElementById("testimonialDots");

let currentTestimonial = 0;


/* Create dots */

testimonials.forEach((_, index) => {

  const dot = document.createElement("span");

  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    showTestimonial(index);
  });

  dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".dot");


function showTestimonial(index) {

  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");

  currentTestimonial = index;
}


prevButton.addEventListener("click", () => {

  currentTestimonial--;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  showTestimonial(currentTestimonial);

});


nextButton.addEventListener("click", () => {

  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  showTestimonial(currentTestimonial);

});


/* Automatic slider */

setInterval(() => {

  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  showTestimonial(currentTestimonial);

}, 6000);


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    const isOpen = item.classList.contains("open");

    faqItems.forEach((otherItem) => {

      otherItem.classList.remove("open");

      const answer = otherItem.querySelector(".faq-answer");

      answer.style.maxHeight = null;

    });


    if (!isOpen) {

      item.classList.add("open");

      const answer = item.querySelector(".faq-answer");

      answer.style.maxHeight = answer.scrollHeight + "px";

    }

  });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;

  if (!name || !phone || !email || !service) {

    alert("Please fill in all required fields.");

    return;
  }


  /*
    This demo only displays a success message.

    To actually receive submissions, connect this form
    to your backend, Formspree, Netlify Forms, or another
    form-processing service.
  */

  formSuccess.classList.add("show");

  contactForm.reset();

  setTimeout(() => {
    formSuccess.classList.remove("show");
  }, 7000);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   SIMPLE SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  ".service-card, .feature, .process-step, .credential"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  revealObserver.observe(element);

});
