import { useState, useEffect } from "react"

export const CurrentTime = () => {
    const [ now, setNow ] = useState( '' );

    useEffect(()=> {
        const interval = setInterval( () => {
            setNow( () => getNow() );
        },1000 );
        return () => clearInterval(interval);
    },[])

    function getNow() {
        const date = new Date();
        const d    = date.toLocaleDateString();
        const hour = date.getHours();
        const min  = date.getMinutes();
        let sec  = date.getSeconds();

        if( Number(sec) < 10 ) {
            sec = "0" + sec;
        }

        return d + " " + hour + ":" + min + ":" +sec;
    };

    return (
        <div>
            <p>{now}</p>
        </div>
    )
} 