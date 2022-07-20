import React from "react";
import style from './ActionButtonWhite.module.css'

function ActionButtonWhite({icon, className}) {
    return(
        <div className={style.searchBtn + " " + className}>
            <img src={icon} alt="search-icon"/>
        </div>
    );
}

export default ActionButtonWhite;