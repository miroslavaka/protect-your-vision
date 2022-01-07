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
btnTwo.addEventListener('click', togglePlay);

function playMusicBtnTwo() {
    setTimeout(function() {
        myAudio.play();
    }, 24000000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnTwo();
}

//play after 60 minutes
btnThree.addEventListener('click', togglePlay);

function playMusicBtnThree() {
    setTimeout(function() {
        myAudio.play();
    }, 36000000);
}

function togglePlay() {
    isPlaying === true ? myAudio.pause() : playMusicBtnThree();
}

//---------------------------------------------------------
myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};