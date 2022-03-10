import React from 'react';
import "./app.css";
import Banner from './components/banner';
import NavBar from './components/navbar';
import About from './components/about';

function App() {
  return (
    <div className="">
      <div className="col h-100 banner" >
        < NavBar />
      
        < Banner />
      </div>

      < About />
      
    </div>
  );
}

export default App;
