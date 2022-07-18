import React from "react";
import icon from "../../../../images/icons/default/search.svg";
import style from './ActionButton.module.css'

function ActionButton() {
    return(
        <div className={style.searchBtn}>
            <img src={icon} alt="search-icon"/>
        </div>
    );
}

export default ActionButton;