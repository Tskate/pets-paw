import React from "react";
import styles from './OptionButton.module.css'
import {Link} from "react-router-dom";

function OptionButton({text, path, className}) {
    return(
        <div className={`${styles.optionButton} ${className}`} >
            <Link to={path} className={styles.link}>{text}</Link>
        </div>
    )
}

export default OptionButton;