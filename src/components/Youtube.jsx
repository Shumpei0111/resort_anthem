import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
import NumberEasing from 'react-number-easing';
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
    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(0);
    let intervalId;

    function onUpdate() {
        const val0 = data.video.latlangNum[0];
        const val1 = data.video.latlangNum[1];
        setValue0(val0);
        setValue1(val1);
    }
    useEffect(() => {
        intervalId = setInterval(() => onUpdate(), 600);
        return () => clearInterval(intervalId);
      }, [data.video.latlangNum]);

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
            <div className="latlang">
                <NumberEasing
                  value={value0}
                  decimals={6}
                  ease="expoIn"
                />,
                <NumberEasing
                  value={value1}
                  decimals={6}
                  ease="expoIn"
                />
            </div>
            {/* <div className="latlang">{data.video.latlang}</div> */}
        </div>
    )
}