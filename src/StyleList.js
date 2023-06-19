import React,{useState,useEffect} from 'react'
 import {items} from './items'
const StyleList = ({ style }) => {
    const [selectedStyleList,SetSelectedStyleList]=useState([])

    useEffect(() => {

    console.log(items[style])
    if(items[style]==undefined){
        SetSelectedStyleList(items[style])
    }
            //
     
      });

  return (
    <div>
              <h2> STYLE </h2>
              <ul className='btn-item-container'>
                {selectedStyleList.map((itm)=>{
                    return <li className='btn-item' key={itm}>{itm}</li>
                })}
              </ul>
    </div>
  )
}

export default StyleList


