import React from "react";
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import BreedsFilter from "./BreedsFilterPanel/BreedsFilter";
import style from './BreedsContent.module.css'

function BreedsContent({breeds}) {
    return(
        <div className={style.content}>
            <div className={style.header}>
                <div className={style.leftPart}>
                    <ActionButton icon={icon} />
                    <SectionTitle text="BREEDS"/>
                </div>
                <BreedsFilter breedsList={breeds}/>
            </div>
        </div>
    );
}

export default BreedsContent;