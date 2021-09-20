import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';
import NumberEasing from 'react-number-easing';
import './videos.scss';

const SIDE_LIST_WIDTH = 276;

const settingOption = () => {
    const setVideoWidth = (() => {
        const inner = window.innerWidth;
        const res   = inner - SIDE_LIST_WIDTH;
        if( res < 0 ) {
            throw new Error( 'When set to video width, smaller than zero.' );
        }
        return String( res );
    })();

    return setVideoWidth;
};

const opts = {
    height: '550',
    width: '0',
    playerVars: {
        autoplay: 1,
    },
};

// iframeの横幅の決定
opts.width = settingOption();



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

    useEffect(() => {
        function onUpdate() {
            const val0 = data.video.latlongNum[0];
            const val1 = data.video.latlongNum[1];
            setValue0(val0);
            setValue1(val1);
        }

        let intervalId = setInterval(() => onUpdate(), 600);
        return () => clearInterval(intervalId);
      }, [data.video.latlongNum]);

    return (
        <div className="Rows">
            <div id={data.video.id} className="row" role="tabpanel">
                <YouTube
                    videoId={data.video.id}
                    opts={opts}
                    onReady={_onReady}
                    onStateChange={_onStateChange}
                />
                <p className="name">{data.video.name}</p>
                <span className="title">{data.video.title}</span>
                <p>{data.video.latlong}</p>
                <div className="row_links">
                    <p><a href={data.video.gmap} target="_blank" rel="noopener noreferrer">Google Map</a></p>
                    {/** wikipedia */
                        (() => {
                        if( data.video.wikiUrl ) {
                            return <div className="aaa"><p>&nbsp;|&nbsp;</p><p><a href={data.video.wikiUrl} target="_blank" rel="noopener noreferrer">wikipedia</a></p></div>
                        }
                    })()
                    }
                    {/** official site */
                        (() => {
                        if( data.video.site ) {
                            return <div className="aaa"><p>&nbsp;|&nbsp;</p><p><a href={data.video.site} target="_blank" rel="noopener noreferrer">もっと見る</a></p></div>
                        }
                    })()
                    }
                </div>
            </div>
            <div className="latlong">
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
        </div>
    )
}