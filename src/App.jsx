/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import Screen from "./components/screen";
import "./style/index.css";
import { getContact } from "./utils/dbfunctions";

function App() {
  const [contactRoot,setContactRoot] = useState([]);

  // fetching the data form firebase
  useEffect(()=>{
    (async()=>{
      const list = await getContact();
      setContactRoot(list);
    })(); // Immediately Invoke Funtion Expression IIFE.
  },[])
  

  return (
    <center>
      <Screen contacs={contactRoot} setContactRoot={setContactRoot}  />
    </center>
  );
}

export default App;
