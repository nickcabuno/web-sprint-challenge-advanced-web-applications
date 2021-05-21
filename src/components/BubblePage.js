import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios"
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { useParams, useHistory } from 'react-router-dom';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const { id } = useParams();

  useEffect(() =>{
    axiosWithAuth()
    .get(`http://localhost:5000/api/colors`)
    .then((res) => {
      console.log(res.data)
      setColorList(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
