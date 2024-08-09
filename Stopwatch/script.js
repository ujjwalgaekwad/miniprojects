let [seconds,minutes, hours] = [0,0,0];
let stopTimer = document.querySelector("#stoptimer");
let playButton = document.querySelector("#play");
let stopButton = document.querySelector("#stop");
let restartButton = document.querySelector("#restart");
let timer = null;

function stopwatch() {
    seconds++;
    if(seconds == 60) {
        seconds=0;
        minutes++;
        if(minutes == 60){
            minutes=0;
            hour++;
        }
    }
    stopTimer.innerHTML = hours +":"+ minutes +":"+ seconds;
}

function watchStart() {
    if(timer !== null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

}

playButton.addEventListener('   click', () => {
    watchStart();
}) 