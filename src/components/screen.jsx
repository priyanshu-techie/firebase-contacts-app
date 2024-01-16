/* eslint-disable react/prop-types */
import Style from "../style/screen.module.css";
import SearchBox from "./searchBox";
import Card from "./card";
import NewCon from "./addNew";
import EditCon from "./editContact";
import Popup from "./popup";
import Loading from './loading'
import { useEffect, useRef, useState } from "react";
import { ContactsContext } from "../store/context";

// passing state to state and then using it will not work
// dont use variables to store data they dont change on state chnage

function Screen({ contacs, setContactRoot, isfetching }) { // lifted the state up (contacts arr) caz here i wanted the delete and add functions to be destroyed by search function
  // to maintain the list of contacts
  const [contactsArr, setContacsArr] = useState(contacs);
  // to show the popup
  const [showPopup, setShowPopup] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
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
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
    setIsUpdate(false);
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
    setOldContactDetails(details);
    scrollLockForPopup();
    setIsUpdate(true);
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
      <ContactsContext.Provider value={{
          closePopup,
          addContact,
          editContact,
          deleteIt:deleteContact,
          editContactInitialize
      }}>
        <div className={showPopup ? Style.contentPopup : Style.contentNoPopup} ref={scrollBox}>
          
          {showPopup&& <Popup>
                { isUpdate? <EditCon oldContactDetails={oldContactDetails}/> : <NewCon/>}
          </Popup>}
            
          { isfetching? <Loading/> :
          contactsArr.length ? (
            contactsArr.map((elem, ind) => {
              return <Card key={ind} details={elem}/>;
            })
          ) : (
            <div className={Style.noContent}>
              <div>
                <h2>🙍‍♂️ No Contacts Found</h2>
              </div>
            </div>
          )}
        </div>
      </ContactsContext.Provider>
    </div>
    
  );
}

export default Screen;
