import React from "react";
import styles from './OptionButton.module.css'

function OptionButton({text}) {
    return(
        <div className={styles.optionButton}>
            {text}
        </div>
    )
}

export default OptionButton;