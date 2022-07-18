import React from "react";
import styles from './OptionButton.module.css'
import {Link} from "react-router-dom";

function OptionButton({text, path}) {
    return(
        <div className={styles.optionButton} >
            <Link to={path}>{text}</Link>
        </div>
    )
}

export default OptionButton;