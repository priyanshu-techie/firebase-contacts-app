/* eslint-disable react/prop-types */
import { useRef } from "react";
import Style from "../style/screen.module.css"
import { IoMdAddCircle } from "react-icons/io";

function SearchBox({ handleInputChange, addItem }){
    let input = useRef()

    return(
        <div className={Style.searchBox}>
            <div className={Style.inputBox}>
                <input type="text" placeholder="🔍  Search Contact" ref={input} onChange={()=>handleInputChange(input.current.value)} />
            </div>
            <div>
                <IoMdAddCircle className={Style.icon} onClick={addItem}/>
            </div>
        </div>
    )
}


export default SearchBox;