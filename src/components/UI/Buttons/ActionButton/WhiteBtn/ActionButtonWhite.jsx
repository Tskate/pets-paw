import React from "react";
import style from './ActionButtonWhite.module.css'

function ActionButtonWhite({icon, className, onClick}) {
    return(
        <div className={`${className} ${style.searchBtn}`} onClick={() => onClick()}>
            <img src={icon} alt="search-icon"/>
        </div>
    );
}

export default ActionButtonWhite;