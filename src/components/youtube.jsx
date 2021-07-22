import YouTube from 'react-youtube';
import './videos.scss';

const opts = {
    height: '410',
    width: '660',
    playerVars: {
        autoplay: 0,
    },
};

const _onReady = ev => {
    ev.target.pauseVideo();
}

const _onStateChange = data => {
    if( data.data !== 0 && data.data !== -1 ) {
    }
}

export const Video = (data) => {
    console.log("video",data.video);

    return (
        <div className="Rows">
            <div className="row">
                <YouTube
                    videoId={data.video.id}
                    opts={opts}
                    onReady={_onReady}
                    onStateChange={_onStateChange}
                />
                <p className="name">{data.video.name}</p>
                <span className="title">{data.video.title}</span>
            </div>
        </div>
    )
}