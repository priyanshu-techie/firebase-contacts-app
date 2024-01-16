/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import Screen from "./components/screen";
import "./style/index.css";
import { getContact } from "./utils/dbfunctions";

function App() {
  const [contactRoot,setContactRoot] = useState([]);
  const [isfetching,setIsFetching] = useState(true);

  // fetching the data form firebase
  useEffect(()=>{
    (async()=>{
      const list = await getContact();
      setContactRoot(list);
      setIsFetching(false);
    })(); // Immediately Invoke Funtion Expression IIFE.
  },[])
  

  return (
    <center>
      <Screen contacs={contactRoot} setContactRoot={setContactRoot} isfetching={isfetching} />
    </center>
  );
}

export default App;
