import React,{useState,useEffect, Fragment} from 'react'
import './alpaca.css';

const Alpaca = ({alpaca}) => {

  useEffect(() => {
    console.log(alpaca)
 
  }, [alpaca]);

  const getImagePath = (folder,file) => {
    return require(`./alpaca/${folder}/${file}.png`);
  };
  return (
    <Fragment>

          <img src={getImagePath("Background",alpaca.Background)} className='img-background'  /> 
          <img src={getImagePath("Neck",alpaca.Neck)} className='alpaca-neck'  /> 
          <img src={getImagePath("Leg",alpaca.Leg)} className='alpaca-leg'  /> 
          <img src={require("./alpaca/nose.png")} className='alpaca-nose'  /> 
          <img src={getImagePath("Eyes",alpaca.Eyes)} className='alpaca-eyes'  /> 
          <img src={getImagePath("Ears",alpaca.Ears)} className='alpaca-ears'  /> 
          <img src={getImagePath("Accessories",alpaca.Accessories)} className='alpaca-accessories'  /> 
          <img src={getImagePath("Hair",alpaca.Hair)} className='alpaca-hair'  /> 
          <img src={getImagePath("Mouth",alpaca.Mouth)} className='alpaca-mouth'  /> 
    </Fragment>

  )
}

export default Alpaca
