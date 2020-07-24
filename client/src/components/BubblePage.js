import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import ColorForm from './ColorForm'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [newColor, setNewColor] = useState(initialColor)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then(res => {

      setColorList(res.data)
    })
  })

 
  const addColor = e => {
    e.preventDefault()
    axiosWithAuth()
    .post('http://localhost:5000/api/colors', newColor)
    .then(res => {
      console.log(res)
    })
  }
  return (
    <>
      <ColorForm newColor={newColor} addNewColor={addColor} setNewColor={setNewColor} />
      <ColorList colors={colorList} updateColors={setColorList}  />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
