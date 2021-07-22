import { videoList } from "../assets/video-list";
import './sideList.scss';

export const SideList = ( props ) => {
    const items = videoList.slice();

    const clikEv = index => {
        props.effect(videoList[index]);
    };

    return(
        <div id="sideListWrapper">
            <p className="location_select_nav">Location Select</p>
            <ul id="sideList">
                {items.map((item,index) => (
                    [
                        <li data-location={item.id} onClick={()=> clikEv(index)} className="location" key={item.id}>
                            <p className="location_id">{item.enName}</p>
                            <span>{item.name}</span>
                            <p className="location_id">{item.id}</p>
                        </li>
                    ]
                ))}
            </ul>
            <address>(C) Shumpei All Rights Reserved.</address>
        </div>
    )
}