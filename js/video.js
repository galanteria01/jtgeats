const playPause = document.querySelector('.video--playpause');
const video = document.querySelector('video');
const image = document.querySelector('.video--playpause img');

playPause.onclick = function() {
  if(video.paused) {
    video.play()
    image.src = './assets/icons/pause.png'
  } else {
    video.pause();
    image.src = './assets/icons/play.png'
  }
}