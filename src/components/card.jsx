/* eslint-disable react/prop-types */
import Style from "../style/card.module.css"
import { FaRegCircleUser } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";
import { deleteContactFromDb } from "../utils/dbfunctions";
import { useContext } from "react";
import { ContactsContext } from "../store/context";

function Card({details}){
    
    

    const methods = useContext(ContactsContext);

    return(
        <div className={Style.cardBox}>
            <FaRegCircleUser className={Style.icon}/>
            <div className={Style.nameAndEmail}>
                <p className={Style.name}>{details.name}</p>
                <p className={Style.email}>{details.email}</p>
            </div>
            <div className={Style.editDel}>
                <TbEditCircle className={Style.edit} onClick={()=>methods.editContactInitialize(details)} />
                <FaTrashCan className={Style.delete} onClick={()=>{
                    methods.deleteIt(details);
                    deleteContactFromDb(details.id)
                }}/>
            </div>
        </div>
    )
}

export default Card;