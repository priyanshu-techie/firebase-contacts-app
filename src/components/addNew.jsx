/* eslint-disable react/prop-types */
import { useRef } from "react";
import Style from "../style/popup.module.css";
import { IoIosClose } from "react-icons/io";


function NewCon({closePopup, addContact }){
    const name = useRef()
    const email = useRef()

    return <div className={Style.newCon}>
        <IoIosClose className={Style.closeIcon} onClick={closePopup}/>
        <div>
            <label htmlFor="username">Username:</label> <br />
            <input type="text" name="username" ref={name} />
        </div>
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" ref={email}/>
        </div>
        <div>
            <button onClick={()=>{addContact(name.current.value,email.current.value); closePopup();}}>Add Contact</button>
        </div>
    </div>
}

export default NewCon;