import React from 'react';
import "./app.css";
import Banner from './components/banner';
import NavBar from './components/navbar';
import About from './components/about';
import Achievements from './components/achievements';
import Community from './components/community';
import Team from './components/team';
import MobileApp from './components/mobile';
import Blogs from './components/blog';

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

      < Team />

      <div className="mobile">
        < MobileApp />
      </div>

      < Blogs /> 


      
    </div>
  );
}

export default App;
