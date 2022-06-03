const first_btn = document.querySelector('.first_button');
const first_popup = document.querySelector('.first_popup');
const second_btn = document.querySelector('.second_button');
const second_popup = document.querySelector('.second_popup');
const third_btn = document.querySelector('.third_button');
const third_popup = document.querySelector('.third_popup');
const fourth_btn = document.querySelector('.fourth_button');
const fourth_popup = document.querySelector('.fourth_popup');
const background = document.querySelector('.wrappert');



let isVisible1 = false;
let clicked1 = false;
let block1 = false;
let isVisible2 = false;
let clicked2 = false;
let block2 = false;
let isVisible3 = false;
let clicked3 = false;
let block3 = false;
let isVisible4 = false;
let clicked4 = false;
let block4 = false;



background.addEventListener('click',  () => {
    if (!clicked1 && block1 == false) { first_popup.classList.remove('is-visible'); isVisible1 = false; }
    if (!clicked2 && block2 == false) { second_popup.classList.remove('is-visible'); isVisible2 = false; }
    if (!clicked3 && block3 == false) { third_popup.classList.remove('is-visible'); isVisible3 = false; }
    if (!clicked4 && block4 == false) { fourth_popup.classList.remove('is-visible'); isVisible4 = false; }

    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    block1 = false;
    block2 = false;
    block3 = false;
    block4 = false;
    
});

first_btn.addEventListener('click', () => {
    clicked1 = true;
    isVisible1 = !isVisible1;
    isVisible1 ? first_popup.classList.add('is-visible') : first_popup.classList.remove('is-visible');
});

second_btn.addEventListener('click', () => {
    clicked2 = true;
    isVisible2 = !isVisible2;
    isVisible2 ? second_popup.classList.add('is-visible') : second_popup.classList.remove('is-visible');
});

third_btn.addEventListener('click', () => {
    clicked3 = true;
    isVisible3 = !isVisible3;
    isVisible3 ? third_popup.classList.add('is-visible') : third_popup.classList.remove('is-visible');
});

fourth_btn.addEventListener('click', () => {
    clicked4 = true;
    isVisible4 = !isVisible4;
    isVisible4 ? fourth_popup.classList.add('is-visible') : fourth_popup.classList.remove('is-visible');
});

first_popup.addEventListener('click', () => {
    block1 = true;
});

second_popup.addEventListener('click', () => {
    block2 = true;
});

third_popup.addEventListener('click', () => {
    block3 = true;
});

fourth_popup.addEventListener('click', () => {
    block4 = true;
});
