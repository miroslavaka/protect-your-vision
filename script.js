'use strict';

let btnOne = document.querySelector('.button-one');
let btnTwo = document.querySelector('.button-two');
let btnThree = document.querySelector('.button-three');
let myAudio = document.querySelector('.my-audio');
let isPlaying = false;

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