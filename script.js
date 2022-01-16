'use strict';

let btnOne = document.querySelector('.button-one');
let btnTwo = document.querySelector('.button-two');
let btnThree = document.querySelector('.button-three');
let myAudio = document.querySelector('.my-audio');
let isPlaying = false;

function changeBackgroundImage(bgImage) {
    document.body.style.backgroundImage = 'url(' + bgImage + ')';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}

//DOMContentLoaded event is triggered when your whole HTML page has been loaded
//document.addEventListener('DOMContentLoaded', changeBackgroundImage());

//if you want to wait until page is fully loaded, you can listen for load
document.addEventListener('DOMContentLoaded', changeBackgroundImage());

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};

//play after 20 minutes
btnOne.addEventListener('click', togglePlay);

function playMusicBtnOne() {
    setTimeout(function() {
        myAudio.play();
    }, 1200000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnOne();
}

//play after 40 minutes
btnTwo.addEventListener('click', togglePlay);

function playMusicBtnTwo() {
    setTimeout(function() {
        myAudio.play();
    }, 2400000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnTwo();
}

//play after 60 minutes
btnThree.addEventListener('click', togglePlay);

function playMusicBtnThree() {
    setTimeout(function() {
        myAudio.play();
    }, 3600000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnThree();
}

//countdown
const startingMinutes = 40;
let time = startingMinutes * 60;
const countdownEl = document.querySelector('.countdown');

let runTheClock = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    /*  if (countdownEl.innerHTML == '0:00') {
                countdownEl.innerHTML === '0:00';
                myAudio.play();
            } */
    if (--time < 0) {
        clearInterval(runTheClock);
        myAudio.play();
    }

    /* if (minutes === 0) {
                  myAudio.play();
              } */
}