/* eslint-disable react/prop-types */
import Style from "../style/card.module.css"
import { FaRegCircleUser } from "react-icons/fa6";
import { TbEditCircle } from "react-icons/tb";
import { FaTrashCan } from "react-icons/fa6";

function Card({details,deleteIt,editContact}){
    return(
        <div className={Style.cardBox}>
            <FaRegCircleUser className={Style.icon}/>
            <div className={Style.nameAndEmail}>
                <p className={Style.name}>{details.name}</p>
                <p className={Style.email}>{details.email}</p>
            </div>
            <div className={Style.editDel}>
                <TbEditCircle className={Style.edit} onClick={()=>editContact(details)} />
                <FaTrashCan className={Style.delete} onClick={()=>deleteIt(details)}/>
            </div>
        </div>
    )
}

export default Card;