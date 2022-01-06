'use strict';

let btnOne = document.querySelector('.button-one');
let btnTwo = document.querySelector('.button-two');
let btnThree = document.querySelector('.button-three');
let myAudio = document.querySelector('.my-audio');
let isPlaying = false;

btnOne.addEventListener('click', togglePlay);

//play after 20 minutes
function playMusicBtnOne() {
    setTimeout(function() {
        myAudio.play();
    }, 12000000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnOne();
}

//play after 40 minutes
function playMusicBtnOne() {
    setTimeout(function() {
        myAudio.play();
    }, 24000000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnOne();
}

//play after 60 minutes
function playMusicBtnOne() {
    setTimeout(function() {
        myAudio.play();
    }, 36000000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnOne();
}

//---------------------------------------------------------
myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};