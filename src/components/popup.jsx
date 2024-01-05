/* eslint-disable react/prop-types */
import Style from "../style/popup.module.css"
import NewCon from "./addNew";
import EditCon from "./editContact";

// now i understand the reason to have a global contex manangement
function Popup({ colsePopup, addContact, oldContactDetails, isForUpdate, editContact }){
    return(
        <div className={Style.popup}>
            {isForUpdate? <EditCon oldContactDetails={oldContactDetails} colsePopup={colsePopup} editContact={editContact}/> : <NewCon colsePopup={colsePopup} addContact={addContact} />}
        </div>
    )
}

export default Popup;