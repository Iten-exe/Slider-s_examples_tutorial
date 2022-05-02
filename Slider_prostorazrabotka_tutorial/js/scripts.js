/*На JS*/
let position = 0; /*Начально положение*/
const slidesToShow = 4; /*Сколько элеметов показывать*/
const slidesToScroll = 1; /*Сколько элеметов проскроливать*/
const container = document.querySelector('.slider_container'); /*Задание константы классам*/
const track = document.querySelector('.slider_track'); /*Задание константы классам*/
const items = document.querySelectorAll('.slider_item'); /*Задание константы классам*/
const itemsCount = items.length;
const buttonPrev = document.querySelector('.button_prev'); /*Задание константы классам*/
const buttonNext = document.querySelector('.button_next'); /*Задание константы классам*/
const itemWidth = container.clientWidth / slidesToShow; /*Задание константы ширины каждого элемента*/
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

buttonNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

buttonPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkBtns();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
	buttonPrev.disabled = position === 0;
	buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();


