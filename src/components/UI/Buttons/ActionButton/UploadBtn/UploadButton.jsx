import React from "react";
import style from './UploadButton.module.css'
import icon from '../../../../../images/icons/default/upload.svg'

function UploadButton() {
    return (
        <div className={style.button}>
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