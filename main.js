
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function calcTime(){
    const futureDate = new Date('11 October, 2023');
    const currentDate = new Date();

    const ms = (futureDate - currentDate) / 1000;
    const s = Math.trunc(ms) % 60;
    const m = Math.trunc(ms / 60) % 60;
    const h = Math.trunc(ms / 3600) % 24;
    const d = Math.trunc(ms / 3600 / 24);

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


