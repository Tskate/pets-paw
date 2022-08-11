import React from "react";
import styles from './OptionButton.module.css'
import {Link} from "react-router-dom";

function OptionButton({text, path, className, isChosen}) {
    return(
        <div className={`${styles.optionButton} ${className}`} style={isChosen ? {backgroundColor: '#FF868E'} : {}}>
            <Link to={path}
                  className={styles.link}
                  style={isChosen ? {color: '#FFFFFF'} : {}}>{text}
            </Link>
        </div>
    )
}

export default OptionButton;