//--------------------------------BURGER------------------------------------//

const burger = document.querySelector('.burger');
const burgerLinePrimary = document.querySelector('.burger__line_primary');
const burgerLineSecondary = document.querySelector('.burger__line_secondary');
const navigation = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__item')
const html = document.querySelector('html');

const burgerToCross = () => {
    burgerLinePrimary.classList.toggle('burger__line_primary_active');
    burgerLineSecondary.classList.toggle('burger__line_secondary_active');
}

const crossToBurger = () => {
    burgerLinePrimary.classList.remove('burger__line_primary_active');
    burgerLineSecondary.classList.remove('burger__line_secondary_active');
}

const openNavigation = () => {
    burgerToCross();
    navigation.classList.toggle('nav__list_active');
    html.classList.toggle('no-scroll');
}

const closeNavigation = () => {
    crossToBurger();
    navigation.classList.remove('nav__list_active');
    html.classList.remove('no-scroll');
}

burger.addEventListener('click', openNavigation);
navigation.addEventListener('click', closeNavigation);

//--------------------------------BURGER------------------------------------//
