var audio = document.querySelector(".song-track");
var video = document.getElementById("bg-video");
var progressBarFill = document.getElementById("progress-bar-fill");
var timeDisplay = document.querySelector(".time-display");
var playButton = document.querySelector(".play-button");
var pauseButton = document.querySelector(".pause-button");

function playPause(){
    if (audio.paused){
        audio.play();
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "inline-flex";
    } else{
        audio.pause();
        video.pause();
        playButton.style.display = "inline-flex";
        pauseButton.style.display = "none";
    }
}

audio.addEventListener("timeupdate", function (){
    var currentTime = formatTime(audio.currentTime);
    var duration = formatTime(audio.duration);
    timeDisplay.textContent = currentTime + " / " + duration;

    var progress = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = progress + "%";
});

function formatTime(time){
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}