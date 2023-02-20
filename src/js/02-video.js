import Player from '@vimeo/player';

import throttle from 'lodash.throttle'; 

// connect vimeo player to page (to html)
const player = new Player(document.querySelector('#vimeo-player'), {
    id: '#vimeo-player',
    width: 640
});

player.on('timeupdate', throttle(saveVideoTimeInLokalStorage, 1500)); // player on event

// saving time of the video to the storage
function saveVideoTimeInLokalStorage(e) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds))
    // console.log(JSON.parse( localStorage.getItem('videoplayer-current-time'))); //self control
};

// set the time to start video if page was reloaded

if(localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));
};

//change custom video file in player
const playerRef = document.querySelector('#vimeo-player');
playerRef.src = 'https://player.vimeo.com/video/730716638';

