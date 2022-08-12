import React from "react";
import style from './ImageBlock.module.css'
import ActionButtonWhite from "../../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from '../../../../images/icons/default/fav.svg'
import OptionButton from "../../../UI/Buttons/OptionButton/OptionButton";

function ImageBlock({pet, gridArea, addToFavourite, removeFromFavourites, favs, action, isGallery}) {

    function actionButtonClick(){
        if(favs.length) {
            const isFav = favs.filter(f => f.image_id === pet.id)
            isFav.length !== 0 ? removeFromFavourites(isFav[0].id) : addToFavourite(pet)
        } else {
            addToFavourite(pet)
        }
        action()
    }



    return(
        <div className={style.img} style={gridArea}>
            <div className={style.imgCont}>
                <img src={pet.url} alt="pet-image"/>
            </div>
            <div className={style.background}>
                {isGallery === true
                    ? <ActionButtonWhite
                        className={style.fav}
                        icon={icon}
                        onClick={() => actionButtonClick()}/>
                    : <OptionButton
                        className={style.breed}
                        text={pet.breeds[0] ? pet.breeds[0].name : 'Unknown'}
                        path={pet.breeds.length ? `/breeds/${pet.breeds[0].id}` : ''}
                    />
                }
            </div>

        </div>
    );
}

export default ImageBlock;