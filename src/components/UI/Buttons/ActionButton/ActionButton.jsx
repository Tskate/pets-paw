import React from "react";
import icon from "../../../../images/icons/default/search.svg";
import style from './ActionButton.module.css'

function ActionButton({icon, onClick}) {
    return(
        <div className={style.searchBtn} onClick={() => onClick()}>
            <img src={icon} alt="search-icon"/>
        </div>
    );
}

export default ActionButton;