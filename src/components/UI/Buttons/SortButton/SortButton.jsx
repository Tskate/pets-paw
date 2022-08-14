import React from "react";
import styles from "./SortButton.module.css";

function SortButton({icon, onClick, style}) {
    return(
        <div
            className={styles.sortButton}
            onClick={() => onClick()}
            style={style}
        >
            <img src={icon} alt="search-icon"/>
        </div>
    );
}
export default SortButton;