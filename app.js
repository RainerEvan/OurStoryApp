var audio = new Audio('./assets/song.mp3');
var isPlaying = false;

function playAudio(){
    isPlaying ? audio.play() : audio.pause();
    isPlaying = !isPlaying;
}