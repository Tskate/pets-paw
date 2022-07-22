import React from "react";
import style from './ImageBlock.module.css'
import ActionButtonWhite from "../../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from '../../../../images/icons/default/fav.svg'
// import {useDelFromFavourite} from "../../../../hooks/useRequests";

function ImageBlock({pet, gridArea, addToFavourite, removeFromFavourites, favs, action}) {

    function actionButtonClick(){
        console.log("favs 1", favs)
        if(favs.length) {
            const isFav = favs.filter(f => f.image_id === pet.id)
            console.log("isFav", isFav)
            // console.log("isFav id", isFav[0].id)
            isFav.length !== 0 ? removeFromFavourites(isFav[0].id) : addToFavourite(pet)
        } else {
            addToFavourite(pet)
        }
        action()
        console.log("favs 2", favs)
    }

    return(
        <div className={style.img} style={gridArea}>
            <div className={style.imgCont}>
                <img src={pet.url} alt="pet-image"/>
            </div>
            <div className={style.background}/>
            <ActionButtonWhite
                className={style.fav}
                icon={icon}
                onClick={() => actionButtonClick()}
            />
        </div>
    );
}

export default ImageBlock;