/* eslint-disable react/prop-types */
import Style from "../style/screen.module.css"
import SearchBox from "./searchBox";
import Card from "./card";
import Popup from "./popup";
import { useRef, useState } from "react";

function Screen({contacs}){
    // to maintain the list of contacts
    const [contactsArr,setContacsArr] = useState(contacs)
    // to show the popup
    const [showPopup, setShowPopup] = useState(false);
    // to disable scroll of the list (for popup display)
    const [hasPopup, setHasPopup] = useState(false);
    // to select box to disable scroll 
    const scrollBox = useRef()

    // HELPER FUNCTIONS 👇👇

    // function to handle input change
    function handleInputChange(value){
        let val = value.toLowerCase();
        let newArr = contacs.filter(elem=>elem.name.toLowerCase().includes(val))
        setContacsArr(newArr);
    }
    function addItem(){
        scrollBox.current.scrollTop = 0;
        setShowPopup(true);
        setHasPopup(true);
    }

    function closePopup(){
        setShowPopup(false)
        setHasPopup(false)
    }
    function addContact(name, email){
        const newObj = {name, email};
        const newArr = [newObj, ...contactsArr];
        setContacsArr(newArr)
    }
    function deleteContact(itemObj){
        const newArr = contactsArr.filter(elem=>!(elem.name===itemObj.name&&elem.email===itemObj.email));
        setContacsArr(newArr);
    }


    let content;
    if(contactsArr.length){
        content = contactsArr.map((elem,ind)=>{
            return <Card key={ind} details={elem} deleteIt={deleteContact}/>
        })
    }
    else{
        content = (
            <div className={Style.noContent}>
                <div><h2>🙍‍♂️  No Contacts Found</h2></div>
            </div>
        )
    }
    return(
        // main box of fixed size
        <div className={Style.main}>
            {/* header */}
            <div className={Style.header}>
                <div className={Style.appName}>
                    Email Contacts App
                </div>
                <SearchBox handleInputChange={handleInputChange} addItem={addItem}/>
            </div>
            {/* main list */}
            <div className={ hasPopup?Style.contentPopup:Style.contentNoPopup} ref={scrollBox}>
                {showPopup && <Popup colsePopup={closePopup} addContact={addContact}/>}
                {content}
            </div>
        </div>
    )
}

export default Screen;