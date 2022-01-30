let myAudio = document.querySelector('.my-audio');
let running = false;
let endTime = null;
let timerID = null;
let now;

function startTimer1() {
    running = true;
    now = new Date();
    console.log(now);
    now = now.getTime();
    console.log(now);
    // change last multiple for the number of minutes
    endTime = now + 1000 * 60 * 1;
    console.log(endTime);
    showCountDown1();
}

function showCountDown1() {
    let now = new Date();
    now = now.getTime();
    if (endTime - now <= 0) {
        stopTimer();
        myAudio.play();
    } else {
        let delta = new Date(endTime - now);
        let theMin = delta.getMinutes();
        let theSec = delta.getSeconds();
        let theTime = theMin;
        theTime += (theSec < 10 ? ':0' : ':') + theSec;
        document.forms[0].timerDisplay.value = theTime;
        if (running) {
            timerID = setTimeout('showCountDown1()', 1000);
        }
    }
}

//--------------------------------------------------------
function startTimer2() {
    running = true;
    now = new Date();
    console.log(now);
    now = now.getTime();
    console.log(now);
    // change last multiple for the number of minutes
    endTime = now + 1000 * 60 * 20;
    console.log(endTime);
    showCountDown2();
}

function showCountDown2() {
    let now = new Date();
    now = now.getTime();
    if (endTime - now <= 0) {
        stopTimer();
        myAudio.play();
    } else {
        let delta = new Date(endTime - now);
        let theMin = delta.getMinutes();
        let theSec = delta.getSeconds();
        let theTime = theMin;
        theTime += (theSec < 10 ? ':0' : ':') + theSec;
        document.forms[0].timerDisplay.value = theTime;
        if (running) {
            timerID = setTimeout('showCountDown2()', 1000);
        }
    }
}
//--------------------------------------------------------
function startTimer3() {
    running = true;
    now = new Date();
    console.log(now);
    now = now.getTime();
    console.log(now);
    // change last multiple for the number of minutes
    endTime = now + 1000 * 60 * 40;
    console.log(endTime);
    showCountDown2();
}

function showCountDown3() {
    let now = new Date();
    now = now.getTime();
    if (endTime - now <= 0) {
        stopTimer();
        myAudio.play();
    } else {
        let delta = new Date(endTime - now);
        let theMin = delta.getMinutes();
        let theSec = delta.getSeconds();
        let theTime = theMin;
        theTime += (theSec < 10 ? ':0' : ':') + theSec;
        document.forms[0].timerDisplay.value = theTime;
        if (running) {
            timerID = setTimeout('showCountDown2()', 1000);
        }
    }
}
//--------------------------------------------------------
function startTimer4() {
    running = true;
    now = new Date();
    console.log(now);
    now = now.getTime();
    console.log(now);
    // change last multiple for the number of minutes
    endTime = now + 1000 * 60 * 60;
    console.log(endTime);
    showCountDown2();
}

function showCountDown4() {
    let now = new Date();
    now = now.getTime();
    if (endTime - now <= 0) {
        stopTimer();
        myAudio.play();
    } else {
        let delta = new Date(endTime - now);
        let theMin = delta.getMinutes();
        let theSec = delta.getSeconds();
        let theTime = theMin;
        theTime += (theSec < 10 ? ':0' : ':') + theSec;
        document.forms[0].timerDisplay.value = theTime;
        if (running) {
            timerID = setTimeout('showCountDown2()', 1000);
        }
    }
}
//--------------------------------------------------------

function stopTimer() {
    clearTimeout(timerID);
    running = false;
    document.forms[0].timerDisplay.value = '0:00';
}

//--------------------------------------------------------
function changeBackgroundImage(bgImage) {
    document.body.style.backgroundImage = 'url(' + bgImage + ')';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
document.addEventListener('DOMContentLoaded', changeBackgroundImage());

//--------------------------------------------------------
let isPlaying = false;
let stop = document.querySelector('.stop');

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};
stop.addEventListener('click', togglePlay);

function togglePlay() {
    isPlaying === true ? myAudio.pause() : myAudio.play();
}