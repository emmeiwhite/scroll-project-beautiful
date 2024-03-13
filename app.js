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

// ********** smooth scroll ************
// select links
