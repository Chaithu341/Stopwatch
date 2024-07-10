const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let stopwatchInterval;
let startTime;
let pausedTime = 0;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!stopwatchInterval) {
        console.log('Starting timer');
        startTime = Date.now() - pausedTime;
        stopwatchInterval = setInterval(updateTime, 10);
        console.log('Timer started');
    } else {
        console.log('Timer already running');
    }
}

function pauseTimer() {
    if (stopwatchInterval) {
        console.log('Pausing timer');
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        pausedTime = Date.now() - startTime;
        console.log('Timer paused');
    } else {
        console.log('Timer not running');
    }
}

function resetTimer() {
    console.log('Resetting timer');
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    pausedTime = 0;
    startTime = null;
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '000';
    console.log('Timer reset');
}

function updateTime() {
    const elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = elapsedTime % 1000;

    hoursElement.textContent = padTime(hours);
    minutesElement.textContent = padTime(minutes);
    secondsElement.textContent = padTime(seconds);
    millisecondsElement.textContent = padTime(milliseconds, 3);
}

function padTime(time, length = 2) {
    return time.toString().padStart(length, '0');
}

// Display current date in a colorful format
const dateContainer = document.getElementById('dateContainer');
const currentDate = new Date();
const dateString = currentDate.toDateString();
dateContainer.textContent = dateString;
dateContainer.style.color = 'black';
dateContainer.style.fontSize = '1.2em';
dateContainer.style.marginBottom = '20px';
