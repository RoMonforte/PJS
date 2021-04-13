import MediaPlayer from './plugins/MediaPlayer.js';
import Autoplay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el: video, plugins: [new Autoplay()]});
   
const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};