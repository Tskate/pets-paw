import React from "react";
import style from "./SortButton.module.css";

function SortButton({icon, onClick}) {
    return(
        <div className={style.sortButton} onClick={() => onClick()}>
            <img src={icon} alt="search-icon"/>
        </div>
    );
}
export default SortButton;