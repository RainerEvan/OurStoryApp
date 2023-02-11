var audio = new Audio('./assets/song.mp3');
var isPlaying = false;

function playAudio(){
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
}