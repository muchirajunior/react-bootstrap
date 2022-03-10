import React from 'react';
import "./app.css";
import Banner from './components/banner';
import NavBar from './components/navbar';
import About from './components/about';
import Achievements from './components/achievements';
import Community from './components/community';

function App() {
  return (
    <div className="">
      <div className="col h-100 banner" >
        < NavBar />
      
        < Banner />
      </div>

      < About />

      < Achievements />

      <div className="community">
        < Community />
      </div>
      
    </div>
  );
}

export default App;
