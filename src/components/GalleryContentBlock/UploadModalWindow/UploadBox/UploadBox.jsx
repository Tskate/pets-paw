import React, {useRef} from "react";
import style from "./UploadBox.module.css";
import uploadIcon from "../../../../images/upload-img.svg";

function UploadBox({handleFileUpload, url, isSuccess, setIsSuccess}) {
    const inputFile = useRef(null)

    function onImageBlockClick() {
        setIsSuccess(true)
        inputFile.current.click()
    }

    function dropImage(e) {
        e.preventDefault()
        setIsSuccess(true)
        handleFileUpload(e.dataTransfer.files)
    }
    function inputClick(e) {
        handleFileUpload(e.target.files)
    }

    return(
        <div
            className={isSuccess ? style.imgBlock : `${style.imgBlock} ${style.error}`}
            onClick={onImageBlockClick}
            onDragOver={(e) => e.preventDefault()}
            onDrop={dropImage}
        >
            <input
                style={{ display: "none" }}
                ref={inputFile}
                onChange={inputClick}
                type="file"
            />
            <img src={uploadIcon} className={url ? style.hidden : ''} alt="upload-image"/>
            <p className={url ? style.hidden : ''}><span>Drag here</span> your file or <span>Click here</span> to upload</p>
            <img src={`${url ? url : ''}`}
                 className={url ? style.uploadedImg : style.hidden}
            />
        </div>
    );
}

export default UploadBox;