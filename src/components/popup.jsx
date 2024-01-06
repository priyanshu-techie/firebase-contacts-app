/* eslint-disable react/prop-types */
import Style from "../style/popup.module.css"

// now i understand the reason to have a global contex manangement
function Popup({children}){
    return(
        <div className={Style.popup}>
            { children }
        </div>
    )
}

export default Popup;