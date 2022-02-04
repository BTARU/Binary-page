"use strict";

let scrollArrow = document.querySelector(".mainblock__arrow[data-goto]");
if (scrollArrow) scrollArrow.addEventListener("click", onMenuLinkClick);

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

function onMenuLinkClick(e) {
    let menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        let gotoBlock = document.querySelector(menuLink.dataset.goto);
        let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
        e.preventDefault();
    }
}
