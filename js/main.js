'use strict'
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  // высота header
  const headerHeight = header.offsetHeight;
  // назначение значения для :root на основе высоты header
  document.querySelector(":root").style.setProperty("--header-height", `${headerHeight}px`);

  const headerMenu = document.getElementById("header-nav");
  const headerBurger = document.getElementById("header-burger");
  const headerMenuLinks = document.querySelectorAll(".header-menu__link");

  function openHeaderMenu() {
    if (headerBurger.classList.contains("open-menu")) {
      headerMenu.classList.add("open-menu");
    } else {
      headerMenu.classList.remove("open-menu");
    }
    headerMenuLinks.forEach(function (el) {
      el.addEventListener("click", function () {
        headerBurger.classList.remove("open-menu");
        headerMenu.classList.remove("open-menu");
      });
    });
    document.addEventListener("click", (element) => {
      if (!element.target.closest(".burger, .header-menu")) {
        headerBurger.classList.remove("open-menu");
        headerMenu.classList.remove("open-menu");
      }
    });
    headerBurger.addEventListener("click", () => {
      headerBurger.classList.toggle("open-menu");
      headerMenu.classList.toggle("open-menu");
    });
  }
  openHeaderMenu();
});