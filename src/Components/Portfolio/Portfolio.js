import css from "../../css/styles.css";  
import React from 'react';
import data from "../../Data/Code"
import Website from "./Website"
export default function Portfolio(props) {
  const items = data;
  const getItems = (data) => {
    return data.map(item =>(<Website props={item}></Website>));
  }
  return (
    <div className="page portfolio">
        {getItems(data)}
    </div>
  )
} 