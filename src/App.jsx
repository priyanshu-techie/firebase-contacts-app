/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";
import Screen from "./components/screen";
import "./style/index.css";
import { collection, getDocs, snapshotEqual } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [contactRoot,setContactRoot] = useState([]);

  // fetching the data form firebase
  useEffect(()=>{
    const getContact = async ()=>{
      try {
        const contactsRef  = collection(db,"contacts");
        const snapShot = await getDocs(contactsRef);
        const contactsList = snapShot.docs.map((doc)=>{return { id: doc.id, ...doc.data() }}) // the id and all other data of the document fomr the collection
        setContactRoot(contactsList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    getContact();
  },[])
  

  return (
    <center>
      <Screen contacs={contactRoot} setContactRoot={setContactRoot}  />
    </center>
  );
}

export default App;
