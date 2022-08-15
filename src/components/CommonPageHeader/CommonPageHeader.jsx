import React from "react";
import style from "./CommonPageHeader.module.css";
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import iconHover from '../../images/icons/white/back-white-20.svg'
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import {useNavigate} from "react-router-dom";

function CommonPageHeader({title}) {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    return(
        <div className={style.header}>
            <ActionButton icon={icon} iconHover={iconHover} onClick={goBack}/>
            <SectionTitle text={title}/>
        </div>
    );
}

export default CommonPageHeader;