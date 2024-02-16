//variables for buttons
const StartStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
//variables for buttons

//Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;
//Variables for time values

//variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let LeadingHours = 0;
//variables for leading zero

//Variables for set interval and timerstatus
let timerInterval = null;
let timerstatus = "stopped";
//Variables for set interval and timerstatus

//Stop watch function
function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }

    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

    leadingSeconds = (seconds < 10) ? "0" + seconds : seconds;
    leadingMinutes = (minutes < 10) ? "0" + minutes : minutes;
    LeadingHours = (hours < 10) ? "0" + hours : hours;

    let DisplayTimer = document.getElementById('timer').innerText = LeadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

window.setInterval(function () {
    if (timerstatus === "started") {
        stopWatch();
    }
}, 1000);

StartStopBtn.addEventListener('click', function () {
    if (timerstatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i> `;
        timerstatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerstatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00";
    timerstatus = "stopped";
});
