import React, { useState, useEffect } from 'react';
import { items } from './items';

const StyleList = ({ style,selectItem }) => {
  const [selectedStyleList, setSelectedStyleList] = useState([]);

  useEffect(() => {
    if (items[style] !== undefined) {
      console.log(items[style])
      setSelectedStyleList(items[style]);
    }
  }, [style]);

  return (
    <div>
      <h2>STYLE</h2>
      <ul className="btn-item-container">
        {selectedStyleList.map((itm) => {
          return <li className="btn-item-style" key={itm} onClick={selectItem}>{itm}</li>;
        })}
      </ul>
    </div>
  );
};

export default StyleList;
