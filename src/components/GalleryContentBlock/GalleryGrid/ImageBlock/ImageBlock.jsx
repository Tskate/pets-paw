import React from "react";
import style from './ImageBlock.module.css'
import ActionButtonWhite from "../../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from '../../../../images/icons/default/fav.svg'

function ImageBlock({pet, gridArea}) {
    return(
        <div className={style.img} style={gridArea}>
            <div className={style.imgCont}>
                <img src={pet.url} alt="pet-image"/>
            </div>
            <div className={style.background}/>
            <ActionButtonWhite className={style.fav} icon={icon} />
        </div>
    );
}

export default ImageBlock;