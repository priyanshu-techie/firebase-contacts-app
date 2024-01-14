/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import Style from "../style/popup.module.css";
import { IoIosClose } from "react-icons/io";
import { ContactsContext } from "../store/context";
import { addNewContactToDb } from "../utils/dbfunctions";

function NewCon(){
    const nameRef = useRef()
    const emailRef = useRef()

    const methods = useContext(ContactsContext);

    

    return <div className={Style.newCon}>
        <IoIosClose className={Style.closeIcon} onClick={methods.closePopup}/>
        <div>
            <label htmlFor="username">Username:</label> <br />
            <input type="text" name="username" ref={nameRef} required/>
        </div>
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" ref={emailRef} required/>
        </div>
        <div>
            <button onClick={()=>{
                methods.addContact(nameRef.current.value, emailRef.current.value); 
                methods.closePopup();
                addNewContactToDb({name:nameRef.current.value,email: emailRef.current.value});
            }}>Add Contact</button>
        </div>
    </div>
}

export default NewCon;