import React from "react";
import style from './UploadButton.module.css'
import icon from '../../../../../images/icons/default/upload.svg'

function UploadButton({onclick}) {
    return (
        <div className={style.button} onClick={() => onclick()}>
            <span>
                <img src={icon} alt="upload-icon"/>
            </span>
            <span className={style.text}>
                UPLOAD
            </span>

        </div>
    );
}

export default UploadButton;