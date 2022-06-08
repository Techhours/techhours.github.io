const first_btn = document.querySelector('.first_button');
const first_popup = document.querySelector('.first_popup');
const second_btn = document.querySelector('.second_button');
const second_popup = document.querySelector('.second_popup');
const third_btn = document.querySelector('.third_button');
const third_popup = document.querySelector('.third_popup');
const fourth_btn = document.querySelector('.fourth_button');
const fourth_popup = document.querySelector('.fourth_popup');
const fifth_btn = document.querySelector('.fifth_button');
const fifth_popup = document.querySelector('.fifth_popup');
const sixth_btn = document.querySelector('.sixth_button');
const sixth_popup = document.querySelector('.sixth_popup');
const seventh_btn = document.querySelector('.seventh_button');
const seventh_popup = document.querySelector('.seventh_popup');
const eighth_btn = document.querySelector('.eighth_button');
const eighth_popup = document.querySelector('.eighth_popup');
const ninth_btn = document.querySelector('.ninth_button');
const ninth_popup = document.querySelector('.ninth_popup');
const tenth_btn = document.querySelector('.tenth_button');
const tenth_popup = document.querySelector('.tenth_popup');
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
let isVisible5 = false;
let clicked5 = false;
let block5 = false;
let isVisible6 = false;
let clicked6 = false;
let block6 = false;
let isVisible7 = false;
let clicked7 = false;
let block7 = false;
let isVisible8 = false;
let clicked8 = false;
let block8 = false;
let isVisible9 = false;
let clicked9 = false;
let block9 = false;
let isVisible10 = false;
let clicked10 = false;
let block10 = false;



background.addEventListener('click',  () => {
    if (!clicked1 && block1 == false) { first_popup.classList.remove('transition_opacity'); isVisible1 = false; }
    if (!clicked2 && block2 == false) { second_popup.classList.remove('transition_opacity'); isVisible2 = false; }
    if (!clicked3 && block3 == false) { third_popup.classList.remove('transition_opacity'); isVisible3 = false; }
    if (!clicked4 && block4 == false) { fourth_popup.classList.remove('transition_opacity'); isVisible4 = false; }
    if (!clicked5 && block5 == false) { fifth_popup.classList.remove('transition_opacity'); isVisible5 = false; }
    if (!clicked6 && block6 == false) { sixth_popup.classList.remove('transition_opacity'); isVisible6 = false; }
    if (!clicked7 && block7 == false) { seventh_popup.classList.remove('transition_opacity'); isVisible7 = false; }
    if (!clicked8 && block8 == false) { eighth_popup.classList.remove('transition_opacity'); isVisible8 = false; }
    if (!clicked9 && block9 == false) { ninth_popup.classList.remove('transition_opacity'); isVisible9 = false; }
    if (!clicked10 && block10 == false) { tenth_popup.classList.remove('transition_opacity'); isVisible10 = false; }

    clicked1 = false;
    clicked2 = false;
    clicked3 = false;
    clicked4 = false;
    block1 = false;
    block2 = false;
    block3 = false;
    block4 = false;
    clicked5 = false;
    block5 = false;
    clicked6 = false;
    block6 = false;
    clicked7 = false;
    block7 = false;
    clicked8 = false;
    block8 = false;
    clicked9 = false;
    block9 = false;
    clicked10 = false;
    block10 = false;
    
});

first_btn.addEventListener('click', () => {
    clicked1 = true;
    isVisible1 = !isVisible1;
    isVisible1 ? first_popup.classList.add('transition_opacity') : first_popup.classList.remove('transition_opacity');
});

second_btn.addEventListener('click', () => {
    clicked2 = true;
    isVisible2 = !isVisible2;
    isVisible2 ? second_popup.classList.add('transition_opacity') : second_popup.classList.remove('transition_opacity');
});

third_btn.addEventListener('click', () => {
    clicked3 = true;
    isVisible3 = !isVisible3;
    isVisible3 ? third_popup.classList.add('transition_opacity') : third_popup.classList.remove('transition_opacity');
});

fourth_btn.addEventListener('click', () => {
    clicked4 = true;
    isVisible4 = !isVisible4;
    isVisible4 ? fourth_popup.classList.add('transition_opacity') : fourth_popup.classList.remove('transition_opacity');
});

fifth_btn.addEventListener('click', () => {
    clicked5 = true;
    isVisible5 = !isVisible5;
    isVisible5 ? fifth_popup.classList.add('transition_opacity') : fifth_popup.classList.remove('transition_opacity');
});

sixth_btn.addEventListener('click', () => {
    clicked6 = true;
    isVisible6 = !isVisible6;
    isVisible6 ? sixth_popup.classList.add('transition_opacity') : sixth_popup.classList.remove('transition_opacity');
});

seventh_btn.addEventListener('click', () => {
    clicked7 = true;
    isVisible7 = !isVisible7;
    isVisible7 ? seventh_popup.classList.add('transition_opacity') : seventh_popup.classList.remove('transition_opacity');
});

eighth_btn.addEventListener('click', () => {
    clicked8 = true;
    isVisible8 = !isVisible8;
    isVisible8 ? eighth_popup.classList.add('transition_opacity') : eighth_popup.classList.remove('transition_opacity');
});

ninth_btn.addEventListener('click', () => {
    clicked9 = true;
    isVisible9 = !isVisible9;
    isVisible9 ? ninth_popup.classList.add('transition_opacity') : ninth_popup.classList.remove('transition_opacity');
});

tenth_btn.addEventListener('click', () => {
    clicked10 = true;
    isVisible10 = !isVisible10;
    isVisible10 ? tenth_popup.classList.add('transition_opacity') : tenth_popup.classList.remove('transition_opacity');
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

fifth_popup.addEventListener('click', () => {
    block5 = true;
});

sixth_popup.addEventListener('click', () => {
    block6 = true;
});

seventh_popup.addEventListener('click', () => {
    block7 = true;
});

eighth_popup.addEventListener('click', () => {
    block8 = true;
});

ninth_popup.addEventListener('click', () => {
    block9 = true;
});

tenth_popup.addEventListener('click', () => {
    block10 = true;
});