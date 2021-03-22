const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const USER_LS = 'currentUser';
const greetings = document.querySelector('.js-greetings');
const SHOWING_CN = 'showing';

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSumbmit);
}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSumbmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}

function paintGreetings(text) {
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //he or she is not
        askForName();
    } else {
        //he or she is
        paintGreetings(currentUser);
    }
}

function init() {
    loadName();
}

init();