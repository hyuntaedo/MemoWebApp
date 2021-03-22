const clockBox = document.getElementById('clock');
function clock(){
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours();
    clockBox.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
}
clock();
setInterval(clock,1000);