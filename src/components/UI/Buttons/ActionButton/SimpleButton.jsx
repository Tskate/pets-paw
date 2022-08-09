import React from "react";
import style from "./SimpleButton.module.css"

function SimpleButton({text, onClick, className}) {
    return(
        <div className={className ? `${className} ${style.btn}` : style.btn} onClick={() => onClick()}>
            {text}
        </div>
    );
}

export default SimpleButton;