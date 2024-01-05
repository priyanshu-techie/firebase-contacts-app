/* eslint-disable react/prop-types */
import Style from "../style/popup.module.css"
import NewCon from "./addNew";

function Popup({colsePopup,addContact}){
    return(
        <div className={Style.popup}>
            <NewCon colsePopup={colsePopup} addContact={addContact} />
        </div>
    )
}

export default Popup;