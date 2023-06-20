import rnd from './random.svg';
import dwl from './download.svg';
import { items } from './items';
import './App.css';
import Alpaca from "./Alpaca";
import StyleList from "./StyleList";
import {useState,useEffect} from 'react'

function App() {
  const [selectedStyle,SetSelectedStyle]=useState("")
  const [selectedItem,SetSelectedItem]=useState("")
  const [alpaca,setAlpaca]=useState(
                                    {
                                      Hair:"default",
                                      Ears:"default",
                                      Eyes:"default",
                                      Mouth:"default",
                                      Neck:"default",
                                      Leg:"default",
                                      Accessories:"headphone",
                                      Background:"blue70",
                                    })
const getStyle = (event) => {
  const liText = event.target.innerText;
  SetSelectedStyle(liText);

  const container = event.currentTarget.parentNode;
  const listItems = container.querySelectorAll('li.btn-item');
  listItems.forEach((item) => {
    item.classList.remove('selected-style');
  });
  event.target.classList.add('selected-style');

};
const selectItem = (event) => {
   const liText = event.target.innerText;
  console.log(liText)

  setAlpaca(prevAlpaca => ({
    ...prevAlpaca,
    [selectedStyle]: liText
  }));

  const container = event.currentTarget.parentNode;
  const listItems = container.querySelectorAll('li.btn-item-style');
  listItems.forEach((item) => {
    item.classList.remove('selected-style');
  });
  event.target.classList.add('selected-style');
 
};

const randomAlpaca = () => {

  let rndAccessories= Math.floor(Math.random() * 4);
  let rndBackground= Math.floor(Math.random() * 18);
  let rndEars= Math.floor(Math.random() * 3);
  let rndEyes= Math.floor(Math.random() * 6);
  let rndHair= Math.floor(Math.random() * 7);
  let rndLeg= Math.floor(Math.random() * 6);
  let rndMouth= Math.floor(Math.random() * 5);
  let rndNeck= Math.floor(Math.random() * 4);

  let newAlpaca={
    Accessories: items.Accessories[rndAccessories],
    Background: items.Background[rndBackground],
    Ears: items.Ears[rndEars],
    Eyes: items.Eyes[rndEyes],
    Hair: items.Hair[rndHair],
    Leg: items.Leg[rndLeg],
    Mouth: items.Mouth[rndMouth],
    Neck: items.Neck[rndNeck]

  }
  setAlpaca(newAlpaca)

};

  return (
    <div className="App">
        <div className='header'>
            <p className='title'>
                ALPCA GENERATOR
            </p>
            
        </div >

        <div className='main'>
          <div className='alpaca'>
            <Alpaca alpaca={alpaca}/>
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

              <StyleList style={selectedStyle} selectItem={selectItem}/>

          </div>
        </div>

        <div className='footer'>
          <button className='button-footer' onClick={randomAlpaca} ><img src={rnd} className="icon" /> <b>Random</b></button>
          <button className='button-footer'><img src={dwl} className="icon" /> <b>Download</b></button>
        </div>
    </div>
  );
}

export default App;
