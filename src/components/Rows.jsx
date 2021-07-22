import { useState, useEffect } from 'react';
import { Video } from './Youtube.jsx';
import { videoList } from '../assets/video-list.js';
import './rightContent.scss';


export const Rows = (props) => {
    /**
     * props ... { current: {title:"",id:"",...} }
     */
    const [ item, setItem ] = useState(videoList[0]);
    useEffect(() => {
        setItem( () => {
            return props.current;
        })
    }, [props]);

    return (
        <div id="rightContent">
            <Video video={item} />
        </div>
    )
}