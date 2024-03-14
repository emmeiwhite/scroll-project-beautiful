// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector(".links-container");
const navToggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggleBtn.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainer.style.height === "") {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = "";
  }
});

// ********** fixed navbar ************
const nav = document.querySelector("#nav");
const navHeight = nav.getBoundingClientRect().height;

/** Top Link | Move to Top button to be shown only when scrollY of certain value happens, say 500 */

const moveToTopBtn = document.querySelector(".top-link");
window.addEventListener("scroll", function (e) {
  const pageScrolledAlongY = window.scrollY;

  if (pageScrolledAlongY > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  // moveToTop button
  if (pageScrolledAlongY > 500) {
    moveToTopBtn.classList.add("show-link");
  } else {
    moveToTopBtn.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const id = href.slice(1);

    const currentSection = document.getElementById(id);
    let position = currentSection.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });

    // To close the linksContainer on each click of nav links
    linksContainer.style.height = "";
  });
});
