/* eslint-disable react/prop-types */
import { useRef } from "react";
import Style from "../style/popup.module.css";
import { IoIosClose } from "react-icons/io";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";


function NewCon({closePopup, addContact }){
    const nameRef = useRef()
    const emailRef = useRef()

    async function addContactToDb(contact){
        try{
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,contact)
        }catch(err){
            console.log("some error occured while uploading to db ",err);
        }
    }

    return <div className={Style.newCon}>
        <IoIosClose className={Style.closeIcon} onClick={closePopup}/>
        <div>
            <label htmlFor="username">Username:</label> <br />
            <input type="text" name="username" ref={nameRef} />
        </div>
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" ref={emailRef}/>
        </div>
        <div>
            <button onClick={()=>{
                addContact(nameRef.current.value, emailRef.current.value); 
                closePopup();
                addContactToDb({name:nameRef.current.value,email: emailRef.current.value});
            }}>Add Contact</button>
        </div>
    </div>
}

export default NewCon;