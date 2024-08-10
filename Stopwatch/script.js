let [seconds, minutes, hours] = [0, 0, 0];
let displayTimer = document.querySelector("#displaytimer");
let playButton = document.querySelector("#play");
let stopButton = document.querySelector("#stop");
let reStartButton = document.querySelector("#restart");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hour++;
        }
    }
    displayTimer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);

}

function stopWatch() {
    clearInterval(timer);
}

function reStartTime() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTimer.innerHTML = "00:00:00";
}


playButton.addEventListener('click', () => {
    watchStart();
})

stopButton.addEventListener('click', () => {
    stopWatch();
})

reStartButton.addEventListener('click', () => {
    reStartTime();
})
