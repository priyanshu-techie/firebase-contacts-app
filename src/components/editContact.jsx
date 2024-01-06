/* eslint-disable react/prop-types */
import { useState } from "react";
import Style from "../style/popup.module.css";
import { IoIosClose } from "react-icons/io";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";


function EditCon({closePopup, oldContactDetails, editContact }){
    const [name,setName] = useState(oldContactDetails.name);
    const [email,setEmail] = useState(oldContactDetails.email);

    const editContactFromDb = async(id,newData)=>{
        try {
            const contactRef = doc(db,"contacts", id);
            await updateDoc(contactRef,newData);
        } catch (error) {
            console.log("error while trying to update the contact ",error);
        }
    }

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
            <button onClick={()=>{
                editContact(oldContactDetails, {name,email});
                closePopup();
                editContactFromDb(oldContactDetails.id, {name,email});
            }}>Update Contact</button>
        </div>
    </div>
}

export default EditCon;