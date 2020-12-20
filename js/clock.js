const clockContainer = document.querySelector(".clock");
todayContainer = clockContainer.querySelector("h4");
clock = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date;
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    todayContainer.innerText = 
    `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일`;

    clock.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds}`; 
}
    function init(){
        getTime();
        setInterval(getTime,1000);
    }

init();

