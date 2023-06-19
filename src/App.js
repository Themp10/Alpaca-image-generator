import rnd from './random.svg';
import dwl from './download.svg';

import './App.css';
import Alpaca from "./Alpaca";
import StyleList from "./StyleList";
import {useState,useEffect} from 'react'

function App() {
  const [selectedStyle,SetSelectedStyle]=useState("")

  const getStyle = (event) =>{
    const liText = event.target.innerText;
    SetSelectedStyle(liText)
  }

  return (
    <div className="App">
        <div className='header'>
            <p className='title'>
                ALPCA GENERATOR
            </p>
            
        </div >

        <div className='main'>
          <div className='alpaca'>
            <Alpaca/>
          </div>

          <div className='buttons'>
              <h2> ACCESSORIZE THE ALPACAS </h2>
              <ul className='btn-item-container'>
                <li className='btn-item' onClick={getStyle}>Hair</li>
                <li className='btn-item' onClick={getStyle}>Ears</li>
                <li className='btn-item' onClick={getStyle}>Eyes</li>
                <li className='btn-item' onClick={getStyle}>Mouth</li>
                <li className='btn-item' onClick={getStyle}>Neck</li>
                <li className='btn-item' onClick={getStyle}>Leg</li>
                <li className='btn-item' onClick={getStyle}>Accessories</li>
                <li className='btn-item' onClick={getStyle}>Background</li>
              </ul>

              <StyleList style={selectedStyle}/>

          </div>
        </div>

        <div className='footer'>
          <button className='button-footer'><img src={rnd} className="icon" /> <b>Random</b></button>
          <button className='button-footer'><img src={dwl} className="icon" /> <b>Download</b></button>
        </div>
    </div>
  );
}

export default App;
