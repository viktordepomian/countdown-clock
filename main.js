
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function calcTime(){
    const futureDate = new Date('11 October, 2023');
    const currentDate = new Date();

    const ms = (futureDate - currentDate);
    const s = Math.trunc(ms / 1000);
    const m = Math.trunc(s / 60);
    const h = Math.trunc(m / 60);
    const d = Math.trunc(h / 24);

    days.textContent = d;
    hours.textContent = formatTime(h);
    minutes.textContent = formatTime(m);
    seconds.textContent = formatTime(s);
};

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

calcTime();

setInterval(calcTime, 1000);


