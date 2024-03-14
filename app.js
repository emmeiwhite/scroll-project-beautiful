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
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const nav = document.querySelector("#nav");
const navHeight = nav.getBoundingClientRect().height;

/** Top Link | Move to Top button to be shown only when scrollY of certain value happens, say 500 */

const moveToTopBtn = document.querySelector(".top-link");
window.addEventListener("scroll", function (e) {
  const pageScrolledAlongY = window.scrollY;

  if (this.innerWidth > 799) {
    if (pageScrolledAlongY > navHeight) {
      nav.classList.add("fixed-nav");
    } else {
      nav.classList.remove("fixed-nav");
    }
  } else {
    nav.classList.add("fixed-nav");
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
/*

This is a cumbersome solution
scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const id = href.slice(1);

    const currentSection = document.getElementById(id);

    // make use of navbar height and linksContainer height
    const containerHeight = document
      .querySelector(".links-container")
      .getBoundingClientRect().height;
    const navbarHeight = nav.getBoundingClientRect().height;

    // This is the logic we use to scroll properly to the particular section because after the navbar becomes fixed, the offsetTop changes (because the fixed element comes out of the normal flow of document)
    const isFixedNav = nav.classList.contains("fixed-nav");

    let position = currentSection.offsetTop - navbarHeight;

    if (!isFixedNav) {
      position = position - navHeight;
      // Here we are again subtracting the height of navbar when it is fi
    }

    // For Mobile screens
    if (navbarHeight > 82) {
      // Which means the links are opened on mobile
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    
    // To close the linksContainer on each click of nav links
    linksContainer.style.height = 0;
  });
});

*/

/** Let's try scrollIntoView() */

scrollLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // 1. Close the navbar whenever the user clicks on a link
    linksContainer.style.height = 0;
    const hrefAttributeValue = e.currentTarget.getAttribute("href");
    const id = hrefAttributeValue.slice(1);

    const currentSection = document.getElementById(id);

    // This would sort it out for most of the cases, but when the navbar is not fixed we need to get this sorted!

    // currentSection.scrollIntoView({ behavior: "smooth", block: "center" });

    // Check if the navbar is fixed
    const isFixedNav = nav.classList.contains("fixed-nav");

    // Scroll the section into view, centering it within the viewport
    if (!isFixedNav) {
      const scrollToPosition = currentSection.offsetTop - 2 * navHeight;
      window.scrollTo({
        left: 0,
        top: scrollToPosition,
      });
    } else {
      currentSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Manually adjust the scrolling position to account for the navbar height
  });
});
