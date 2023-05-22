"use strict";

const openButton = document.querySelector(".navbar__open");
const closeButton = document.querySelector(".navbar__close");
const navbar = document.querySelector(".navbar__container");

openButton.addEventListener("click", () => {
  navbar.classList.add("show");
});

closeButton.addEventListener("click", () => {
  navbar.classList.remove("show");
});

// loader

$(window).on("load", function () {
  $("body").addClass("loaded");
});
