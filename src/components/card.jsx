/* eslint-disable react/prop-types */
import Style from "../style/card.module.css"
import { FaRegCircleUser } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

function Card({details,deleteIt,editContact}){
    
    const deleteContactFromDb = async(id)=>{
        try{
            await deleteDoc(doc(db,"contacts",id));
        }catch(err){
            console.log('error while delteing the contact ',err)
        }
    }

    return(
        <div className={Style.cardBox}>
            <FaRegCircleUser className={Style.icon}/>
            <div className={Style.nameAndEmail}>
                <p className={Style.name}>{details.name}</p>
                <p className={Style.email}>{details.email}</p>
            </div>
            <div className={Style.editDel}>
                <TbEditCircle className={Style.edit} onClick={()=>editContact(details)} />
                <FaTrashCan className={Style.delete} onClick={()=>{
                    deleteIt(details);
                    deleteContactFromDb(details.id)
                }}/>
            </div>
        </div>
    )
}

export default Card;