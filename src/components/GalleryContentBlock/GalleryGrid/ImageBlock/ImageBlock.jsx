import React from "react";
import style from './ImageBlock.module.css'
import ActionButtonWhite from "../../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from '../../../../images/icons/default/fav.svg'

function ImageBlock({img, gridArea}) {
    return(
        <div className={style.img} style={gridArea}>
            <img src={img} alt="pet-image"/>
            <ActionButtonWhite className={style.fav} icon={icon} />
        </div>
    );
}

export default ImageBlock;