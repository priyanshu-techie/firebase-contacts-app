/* eslint-disable react/prop-types */
import { useState } from "react";
import Style from "../style/popup.module.css";
import { IoIosClose } from "react-icons/io";


function EditCon({closePopup, oldContactDetails, editContact }){
    const [name,setName] = useState(oldContactDetails.name);
    const [email,setEmail] = useState(oldContactDetails.email);

    return <div className={Style.newCon}>
        <IoIosClose className={Style.closeIcon} onClick={closePopup}/>
        <div>
            <label htmlFor="username">Username:</label> <br />
            <input type="text" name="username" value={name} onChange={(elem)=>setName(elem.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" value={email} onChange={(elem)=>setEmail(elem.target.value)}/>
        </div>
        <div>
            <button onClick={()=>{editContact(oldContactDetails, {name,email}); closePopup();}}>Update Contact</button>
        </div>
    </div>
}

export default EditCon;