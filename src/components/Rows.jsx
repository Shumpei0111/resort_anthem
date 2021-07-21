import { Video } from './Youtube.jsx';

// {
//     title: "",
//     id: "",
//     name: "",
//     wikiUrl: ""
// }

export const Rows = () => {
    const videos = [
        {
            title: "Crystal Bay Yacht Club Live Stream From Lamai, Koh Samui, Thailand | Live HD Webcam | SamuiWebcam",
            id: "-vZOOe5dNOY",
            name: "サムイ島",
            wikiUrl: "https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%A0%E3%82%A4%E5%B3%B6"
        },
        {
            title: "Club Zand Castricum aan Zee | Powered by Social Hotspot",
            id: "Mml3sbcQOyI",
            name: "カストリクム",
            wikiUrl: "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%82%B9%E3%83%88%E3%83%AA%E3%82%AF%E3%83%A0"
        },
        {
            title: "Soggy Dollar Bar Live Webcam - Jost Van Dyke, British Virgin Islands",
            id: "LXWVYoBluT4",
            name: "ヨスト・ヴァン・ダイク島",
            wikiUrl: "https://ja.wikipedia.org/wiki/%E3%83%A8%E3%82%B9%E3%83%88%E3%83%BB%E3%83%B4%E3%82%A1%E3%83%B3%E3%83%BB%E3%83%80%E3%82%A4%E3%82%AF%E5%B3%B6"
        },
    ];

    
    return (
        <Video videos={videos} />
    )
}