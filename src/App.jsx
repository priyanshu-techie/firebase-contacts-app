/* eslint-disable no-unused-vars */
import { useState,useEffect, useReducer } from "react";
import Screen from "./components/screen";
import "./style/index.css";
import { getContact } from "./utils/dbfunctions";

function reducer(state,action){
  switch(action.type){
    case "InitializeContact":{
      return action.payload;
    }

    case "AddContact":{
      return [action.payload, ...state];
    }

    case "DeleteContact":{
      return state.filter(
        (elem) => !(elem.name === action.payload.name && elem.email === action.payload.email)
      )
    }

    case "EditContact":{
      const deletedOld = state.filter(
        (elem) => !(elem.name === action.payload.oldDetails.name && elem.email === action.payload.oldDetails.email)
      );
      return [action.payload.newDetails, ...deletedOld]
    }
    
    default:
      return state;
  }
}

function App() {
  const [contactRoot,dispatchContacts] = useReducer(reducer,[]);
  const [isfetching,setIsFetching] = useState(true);

  // fetching the data form firebase
  useEffect(()=>{
    (async()=>{
      const list = await getContact();
      // setContactRoot(list);
      dispatchContacts({type:"InitializeContact",payload:list})
      setIsFetching(false);
    })(); // Immediately Invoke Funtion Expression IIFE.
  },[])
  

  return (
    <center>
      <Screen contacs={contactRoot} dispatchContacts={dispatchContacts} isfetching={isfetching} />
    </center>
  );
}

export default App;
