import { useState } from 'react';
import './App.scss';
import { Rows } from './components/Rows';
import { SideList } from './components/SideList';
import { videoList } from './assets/video-list';
import { LoadBoard } from './components/LoadBoard';

function App() {
  const [current, emit] = useState(videoList[0]);

  return (
    <div className="App">
      <LoadBoard />
      <div id="title">
        <h1>Present Resort Point</h1>
        <p>Feel like you're traveling with a live camera at the resort | 世界各地にあるライブカメラで旅行しよう</p>
      </div>
      <div id="container">
        <SideList effect={emit}/>
        <Rows current={current}/>
      </div>
    </div>
  );
}

export default App;
