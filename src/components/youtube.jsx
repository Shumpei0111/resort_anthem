import YouTube from 'react-youtube';
import './videos.scss';

const opts = {
    // height: '390',
    // width: '640',
    height: '195',
    width: '320',
    playerVars: {
        autoplay: 0,
    },
};

const _onReady = ev => {
    ev.target.pauseVideo();
}

export const Video = (videosObj) => {
    const videos = videosObj.videos;

    return (
        <div className="Row">
            {videos.map((video) => (
                [
                    <div className="caption" key={video.name}>
                        {video.name}
                        <YouTube
                            key={video.id}
                            videoId={video.id}
                            opts={opts}
                            onReady={_onReady}
                        />
                    </div>
                ]
            ))}
        </div>
    )
}