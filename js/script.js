"use strict"


// =====================DOM===================================================================================

// const elemOne = document.querySelector(`[data-say-hi]`);
// const one = elemOne.getAttribute(`data-say-hi`);
// console.log(one);

// ===========================================================================================================

// const textElement = document.getElementsByTagName(`li`)[1];
// const textElementContent = textElement.textContent;
// console.log(textElementContent);

// =============================================================================================================

// const elem = document.querySelectorAll(`.like`);
// console.log(elem);

// =============================================================================================================

// const list = document.querySelectorAll(`ul`);
// list.insertAdjacentHTML(
// 	`beforeend`,
// 	`<li>Text</li>`
// );

// ================================Прокрутка======================================================================

// const width = document.documentElement;
// const mainWidth = width.clientWidth;
// const windowWidth = window.innerWidth;
// console.log(windowWidth - mainWidth);

// ================================================================================================================
// function scrollPage() {
// 	window.scrollTo({
// 		top: 100,
// 		left: 0,
// 		behavior: "smooth"
// 	});
// }
// setTimeout(scrollPage, 1000);

// ===================================================================================================================

// const itemOne = document.querySelector('.title');
// const itemTwo = document.querySelector('.page__task');
// const itemThree = document.querySelector(`.page__img`);

// const getItemCoords = itemOne.getBoundingClientRect();
// const getItemTwo = itemTwo.getBoundingClientRect();
// const getItemThree = itemThree.getBoundingClientRect();

// console.log(getItemCoords);
// console.log(getItemTwo);
// console.log(getItemThree);


// ===================================================Event==========================================================

// ===================================================Лічильник======================================================

const txtItem = document.querySelector(`.menu__search`);
const txtItemLimit = txtItem.getAttribute(`maxlength`);
const txtCounter = document.querySelector(`.menu__counter span`);
const menuBody = document.querySelector(`.menu`)


txtCounter.innerHTML = txtItemLimit;

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}

txtItem.addEventListener(`keyup`, txtSetCounter);
txtItem.addEventListener(`keydown`, function(event){
	if(event.repeat) {
		txtSetCounter();
	}
});

// ==================================================Menu=============================================================
function menu(e) {
	if (e.target.closest(`.menu__button`)) {
		menuBody.classList.toggle(`_active`);
	}
	if(!e.target.closest(`.menu`)){
		menuBody.classList.remove(`_active`);
	}
}

document.addEventListener(`click`, menu);
document.addEventListener(`keyup`, function(e){
	if(e.code === `Escape`){
		menuBody.classList.remove(`_active`);
	}
});