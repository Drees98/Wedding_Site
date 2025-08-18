import logo from '../../logo.svg';
import './App.css';
import Home from '../home/Home'
import RSVP from "../rsvp/RSVP"
import Registry from '../registry/Registry';
import Faq from '../Faq/Faq'
import About from '../about/About'
import React, {useState} from 'react';

function App() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='header-content'>
          <div className='Main-top-left' onClick={() => updateToggle(1)}>
            <h2 className='App-cursive-text'>David<br/>&<br/>Jasmine</h2>
            <p className='App-MTL-text'>2026-05-23</p>
          </div>
          <ul className='App-nav-bar'>
            <li className={toggle === 1 ? "active" : ""} onClick={() => updateToggle(1)}>Home</li>
            <li className={toggle === 6 ? "active" : ""} onClick={() => updateToggle(6)}>Itinerary</li>
            <li className={toggle === 2 ? "active" : ""} onClick={() => updateToggle(2)}>RSVP</li>
            <li className={toggle === 3 ? "active" : ""} onClick={() => updateToggle(3)}>About Us</li>
            <li className={toggle === 4 ? "active" : ""} onClick={() => updateToggle(4)}>Registry</li>
            <li className={toggle === 5 ? "active" : ""} onClick={() => updateToggle(5)}>FAQs</li>
          </ul>
        </div>
      </header>
          <div className={toggle === 1 ? "show-content" : "hide-content"}>
            <Home/>
            <button className="Home-button"  onClick={() => updateToggle(2)}>RSVP Here!</button>
          </div>
          <div className={toggle === 6 ? "show-content": "hide-content"}>
            empty for now
          </div>
          <div className={toggle === 2 ? "show-content" : "hide-content"}>
            <RSVP/>
          </div>
          <div className={toggle === 3 ? "show-content" : "hide-content"}>
            <About/>
          </div>
          
          <div className={toggle === 4 ? "show-content" : "hide-content"}>
            <Registry />
          </div>
          
          <div className={toggle === 5 ? "show-content" : "hide-content"}>
            <Faq />
          </div>
    </div>
  );
}
export default App;
