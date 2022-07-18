import React from "react";
import styles from './RegularButtons.module.css'

function RegularReactionBtn({icon}) {
    return(
        <div className={styles.btn}>
            <img src={icon} alt="icon"/>
        </div>
    )
}

export default RegularReactionBtn;