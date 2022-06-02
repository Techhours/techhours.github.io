const first_btn = document.querySelector('.first_button');
const first_popup = document.querySelector('.first-popup');
const fourth_btn = document.querySelector('.fourth_button');
const fourth_popup = document.querySelector('.fourth-popup')
const background = document.querySelector('.wrappert');

const first_image = document.querySelector('.img-popup-1')


let isVisible1 = false;
let clicked1 = false;
let isVisible4 = false;
let clicked4 = false;
let test = false;


background.addEventListener('click',  () => {
    if (!clicked1 && test == false) { first_popup.classList.remove('is-visible'); isVisible1 = false; }
    if (!clicked4) { fourth_popup.classList.remove('is-visible'); isVisible4 = false; }

    clicked1 = false;
    clicked4 = false;
    test = false;
    
});

first_btn.addEventListener('click', () => {
    clicked1 = true;
    isVisible1 = !isVisible1;
    isVisible1 ? first_popup.classList.add('is-visible') : first_popup.classList.remove('is-visible');
});

fourth_btn.addEventListener('click', () => {
    clicked4 = true;
    isVisible4 = !isVisible4;
    isVisible4 ? fourth_popup.classList.add('is-visible') : fourth_popup.classList.remove('is-visible');
});

first_image.addEventListener('click', () => {
    test = true;
    console.log('test')
});