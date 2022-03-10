import React from 'react';
import "./app.css";
import Banner from './components/banner';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="">
      <div className="col h-100 banner" >
        < NavBar />
      
        < Banner />
      </div>
      
    </div>
  );
}

export default App;
