/* eslint-disable react/prop-types */
import Style from "../style/screen.module.css";
import SearchBox from "./searchBox";
import Card from "./card";
import Popup from "./popup";
import { useEffect, useRef, useState } from "react";

// passing state to state and tehn using it will not work
// dont use variables to store data they dont change on state chnage

function Screen({ contacs, setContactRoot }) { // lifted the state up (contacts arr) caz here i wanted the delete and add functions to be destroyed by search function
  // to maintain the list of contacts
  const [contactsArr, setContacsArr] = useState(contacs);
  // to show the popup
  const [showPopupForNew, setShowPopupForNew] = useState(false);
  const [showPopupForUpdate, setShowPopupForUpdate] = useState(false);
  // to disable scroll of the list (for popup display)
  const [hasPopup, setHasPopup] = useState(false);
  // to select box to disable scroll
  const scrollBox = useRef();
  // since passing contacts as state in a state and then using it hence it is not getting updated , to make it updated on a single state change from the root (it is not causing the root to update here in the component) hence using useEffect to update here on change
  useEffect(()=>{setContacsArr(contacs);},[contacs]);

  // HELPER FUNCTIONS 👇👇

  // function to handle input change
  function handleInputChange(value) {
    let val = value.toLowerCase();
    let newArr = contacs.filter((elem) =>
      elem.name.toLowerCase().includes(val)
    );
    setContacsArr(newArr);
  }
  function scrollLockForPopup() {
    scrollBox.current.scrollTop = 0;
    setShowPopupForNew(true);
    setHasPopup(true);
  }

  function closePopup() {
    setShowPopupForNew(false);
    setShowPopupForUpdate(false);
    setHasPopup(false);
  }
  function addContact(name, email) {
    const newObj = { name, email };
    const newArr = [newObj, ...contactsArr];
    // adding and deleting should be done at the root.
    setContactRoot(newArr);
  }
  function deleteContact(itemObj) {
    const newArr = contactsArr.filter(
      (elem) => !(elem.name === itemObj.name && elem.email === itemObj.email)
    );
    setContactRoot(newArr);
  }
  let [oldContactDetails,setOldContactDetails] = useState();
  function editContactInitialize(details){
    setOldContactDetails(details)
    setShowPopupForUpdate(true);
  }
  function editContact(oldDetails,newDetails){
    const deletedOld = contactsArr.filter(
        (elem) => !(elem.name === oldDetails.name && elem.email === oldDetails.email)
      );
    const newArr = [newDetails,...deletedOld];
    setContactRoot(newArr);
  }

  return (
    // main box of fixed size
    <div className={Style.main}>
      {/* header */}
      <div className={Style.header}>
        <div className={Style.appName}>Email Contacts App</div>
        <SearchBox handleInputChange={handleInputChange} scrollLockForPopup={scrollLockForPopup} />
      </div>
      {/* main list */}
      <div className={hasPopup ? Style.contentPopup : Style.contentNoPopup} ref={scrollBox}>
        {showPopupForNew && <Popup colsePopup={closePopup} addContact={addContact} isForUpdate={false}/>}

        {showPopupForUpdate && <Popup isForUpdate={true} colsePopup={closePopup} oldContactDetails={oldContactDetails} editContact={editContact}/>}

        {contactsArr.length ? (
          contactsArr.map((elem, ind) => {
            return <Card key={ind} details={elem} deleteIt={deleteContact}  editContact={editContactInitialize} />;
          })
        ) : (
          <div className={Style.noContent}>
            <div>
              <h2>🙍‍♂️ No Contacts Found</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Screen;
