/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Style from "../style/popup.module.css";
import { IoIosClose } from "react-icons/io";
import { editContactFromDb } from "../utils/dbfunctions";
import { ContactsContext } from "../store/context";


function EditCon({oldContactDetails}){

    const methods = useContext(ContactsContext);

    const [name,setName] = useState(oldContactDetails.name);
    const [email,setEmail] = useState(oldContactDetails.email);



    return <div className={Style.newCon}>
        <IoIosClose className={Style.closeIcon} onClick={methods.closePopup}/>
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
                methods.editContact(oldContactDetails, {name,email});
                methods.closePopup();
                editContactFromDb(oldContactDetails.id, {name,email});
            }}>Update Contact</button>
        </div>
    </div>
}

export default EditCon;