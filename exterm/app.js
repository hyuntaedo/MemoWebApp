const clockContainer = document.querySelector('.js-clock');
const clockTitle = document.querySelector('.js-title');
const name = document.querySelector('.js-name');

function getName() {

}

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`
}

function init() {
    getName();
    getTime();
    setInterval(getTime, 1000);
}

init();