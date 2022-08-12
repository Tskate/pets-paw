import React, {useState, useContext, useRef} from "react";
import ActionButtonWhite from "../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from '../../../images/icons/default/close-icon.svg'
import OptionButton from "../../UI/Buttons/OptionButton/OptionButton";
import successIcon from "../../../images/forLog/success-20.svg"
import errorIcon from "../../../images/forLog/error-20.svg"
import style from './UploadModalWindow.module.css'
import uploadIcon from "../../../images/upload-img.svg"
import {UploadModalWindowContext} from "../../../App";
import SimpleButton from "../../UI/Buttons/ActionButton/SimpleButton";
import UploadBox from "./UploadBox/UploadBox";
import LogBox from "./LogBox/LogBox";
import {sendImage} from "../../../api/hooks/useRequests";

function UploadModalWindow({uploadImage}) {
    const {isActive, setIsActive} = useContext(UploadModalWindowContext);
    const [styleButton, setStyleButton] = useState(style.hidden);

    const statusMsg = {default: 'No file selected', exist: 'Image File Name: '}
    const logMsg = {success: {msg: 'Thanks for the Upload - Cat found!', icon: successIcon}, error: {msg:'No Cat found - try a different one', icon: errorIcon}}

    const [status, setStatus] = useState(statusMsg.default)
    const [log, setLog] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null)
    const [url, setUrl] = useState(null);
    const [isSuccess, setIsSuccess] = useState(true);

    function closeModalWindow() {
        setIsActive(false)
        setUrl(null)
        setLog([])
        setStatus(statusMsg.default)
        setIsSuccess(true)
        setStyleButton(style.hidden)
    }

    function handleFileUpload(files) {
        if(files && files.length) {
            const fileName = files[0].name
            const fileType = fileName.split('.').at(-1)

            if(['png', 'gif', 'jpg'].includes(fileType)) {
                setUploadedImage(files[0])
                setUrl(URL.createObjectURL(files[0]))
                setStatus(statusMsg.exist + files[0].name)
                setStyleButton(style.show)
            }
        }
    }



    function uploadOnServer() {
        setStyleButton(style.hidden)
        uploadImage(uploadedImage).then(response => {
            if(response.ok) {
                setLog([logMsg.success, ...log])
            } else {
                setLog([logMsg.error, ...log])
                setIsSuccess(false)
            }
        })
    }


    return(
        <div className={isActive ? style.container : style.hidden}>
            <div className={style.modalWindow}>
                <div className={style.button}>
                    <ActionButtonWhite icon={icon} onClick={closeModalWindow}/>
                </div>
                <div className={style.info}>
                    <h2>Upload a .jpg or .png Cat Image</h2>
                    <p>Any uploads must comply with the <a href="https://thecatapi.com/privacy">upload guidelines</a> or face deletion.</p>
                </div>
                <UploadBox
                    handleFileUpload={handleFileUpload}
                    url={url}
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                />
                <div className={style.status}>
                    <p>{status}</p>
                </div>
                <SimpleButton text="UPLOAD PHOTO" className={styleButton} onClick={uploadOnServer}/>
                <LogBox logs={log}/>
            </div>
        </div>
    );
}

export default UploadModalWindow;