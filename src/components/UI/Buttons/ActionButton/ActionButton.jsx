import React, {useState} from "react";
import style from './ActionButton.module.css'

function ActionButton({icon, iconHover, onClick}) {
    const [iconSrc, setIconSrc] = useState(icon)

    return(
        <div
            className={style.btn}
            onClick={() => onClick()}
            onMouseOver={() => setIconSrc(iconHover)}
            onMouseOut={() => setIconSrc(icon)}
        >
            <img src={iconSrc} alt="search-icon"/>
        </div>
    );
}

export default ActionButton;