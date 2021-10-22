'use strict'

let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
let scrollArrow = document.querySelector('.mainblock__arrow[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });    
}

scrollArrow.addEventListener('click', onMenuLinkClick);

function onMenuLinkClick(e) {
    let menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        let gotoBlock = document.querySelector(menuLink.dataset.goto);
        let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;         
        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        });
        e.preventDefault();
    }
}