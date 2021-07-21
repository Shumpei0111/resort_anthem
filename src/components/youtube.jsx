import YouTube from 'react-youtube';
import axios from 'axios';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

const _onReady = ev => {
    ev.target.pauseVideo();
}

export const Video = () => {
    return (
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
    )
}