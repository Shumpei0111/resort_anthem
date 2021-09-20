import { useEffect, useState } from "react";
import { videoList } from "../assets/video-list";
import './sideList.scss';

export const SideList = ( props ) => {
    const items = videoList.slice();


    const clikEv = index => {
        props.effect(items[index]);
        setVdId( index );
    };

    const [ vdId, setVdId ] = useState( props.vdId );

    useEffect(() => {
    },[vdId]);

    return(
        <div id="sideListWrapper">
            <p className="location_select_nav">Location Select</p>
            <ul id="sideList" role="tablist">
                {items.map((item,index) => (
                    [
                        <li data-location={item.id} role="presentation" onClick={()=> clikEv(index)} className={`location ${vdId === index ? "current_selected":""}`} key={item.id}>
                            <p aria-controls={item.id} aria-selected={ vdId === index } className="location_id">{item.enName}</p>
                            <span>{item.name}</span>
                        </li>
                    ]
                ))}
                <li className="author">
                    <a className="sns" href="https://twitter.com/seventhseven" target="_blank" rel="noopener noreferrer">Twitter</a>
                </li>
            </ul>
            <address>(C) Shumpei All Rights Reserved.</address>
        </div>
    )
}