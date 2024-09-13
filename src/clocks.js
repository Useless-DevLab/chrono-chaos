let hours;
let minutes;
let seconds;
let time

// GLOBAL

setInterval(() => {
    time = new Date();

    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    milliseconds = time.getMilliseconds();
}, 50);


// ITSDISCOTIME
setInterval(() => {
    let clockDivList = document.getElementsByClassName("chrono-chaos-itsdiscotime-clock");

    for (const chronoChaosItsdiscotimeClockDiv of clockDivList) {
        hoursDiv = chronoChaosItsdiscotimeClockDiv.childNodes[1];
        minutesDiv = chronoChaosItsdiscotimeClockDiv.childNodes[3];
        secondsDiv = chronoChaosItsdiscotimeClockDiv.childNodes[5];

        hoursDiv.innerHTML = `<div>${hours}</div><div>${hours}</div><div>${hours}</div>`;
        hoursDiv.style.transform = `translateX(-50%) rotate(${360 / 12 * (hours % 12 + (minutes / 60))}deg)`

        minutesDiv.innerHTML = `<div>${minutes}</div><div>${minutes}</div><div>${minutes}</div><div>${minutes}</div>`;
        minutesDiv.style.transform = `translateX(-50%) rotate(${360 / 60 * (minutes + (seconds / 60))}deg)`

        secondsDiv.innerHTML = `<div>${seconds}</div><div>${seconds}</div><div>${seconds}</div><div>${seconds}</div><div>${seconds}</div>`;
        secondsDiv.style.transform = `translateX(-50%) rotate(${360 / 60 * seconds}deg)`

        chronoChaosItsdiscotimeClockDiv.style.background = `linear-gradient(${(milliseconds * 360 / 1000)}deg, rgb(244 0 0 / 50%) 0%, rgb(67 94 255 / 50%) 50%, rgb(0 255 20 / 50%) 100%)`
    }
}, 50);

setInterval(() => {
    let daySeconds = (time.getHours() * 3600) + (time.getMinutes() * 60) + time.getSeconds();
    let percentageOfTheDay = (daySeconds / (3600 * 24) * 100).toFixed(2);    

    let clockDivList = document.getElementsByClassName("chrono-chaos-progressbar-clock");

    for (const chronoChaosProgressBarClockDiv of clockDivList) {
        chronoChaosProgressBarClockDiv.childNodes[1].childNodes[1].childNodes[1].innerHTML = `${percentageOfTheDay}%`;
        chronoChaosProgressBarClockDiv.childNodes[1].childNodes[1].style.width = `${percentageOfTheDay}%`
    }
}, 1000);
