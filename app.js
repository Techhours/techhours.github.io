const first_btn = document.querySelector('.first_button');
const first_popup = document.querySelector('.first_popup');
const second_btn = document.querySelector('.second_button');
const second_popup = document.querySelector('.second_popup');
const background = document.querySelector('.wrappert');



let isVisible1 = false;
let clicked1 = false;
let block1 = false;
let isVisible2 = false;
let clicked2 = false;
let block2 = false;



background.addEventListener('click',  () => {
    if (!clicked1 && block1 == false) { first_popup.classList.remove('is-visible'); isVisible1 = false; }
    if (!clicked2 && block2 == false) { second_popup.classList.remove('is-visible'); isVisible2 = false; }

    clicked1 = false;
    clicked2 = false;
    block1 = false;
    block2 = false;
    
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

first_popup.addEventListener('click', () => {
    block1 = true;
});

second_popup.addEventListener('click', () => {
    block2 = true;
});
