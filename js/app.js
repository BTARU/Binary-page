"use strict";

// Прокрутка по клику
// Для прокрутки добавить к нужному элементу атрибут data-goto, его значение будет назначением прокрутки

document.addEventListener("click", scrollToElem);

function scrollToElem(e) {
    const targetElem = e.target;
    if (targetElem.dataset.goto && document.querySelector(targetElem.dataset.goto)) {
        const gotoBlock = document.querySelector(targetElem.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
        e.preventDefault();
    }
}

// Прокрутка по клику
