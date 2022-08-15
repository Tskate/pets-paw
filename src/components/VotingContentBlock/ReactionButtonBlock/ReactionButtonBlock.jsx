import React from "react";
import style from './ReactionButtonBlock.module.css'
import like from '../../../images/icons/default/likeW.svg'
import fav from '../../../images/icons/default/favW.svg'
import dislike from '../../../images/icons/default/dislikeW.svg'

function ReactionButtonBlock({pet, setReaction, addToFavourite, removeFromFavourites, favs, action, addToLog}) {

    function actionButtonClick(){
        if(favs.length) {
            const isFav = favs.filter(f => f.image_id === pet.id)
            isFav.length !== 0 ? removeFromFavourites(isFav[0].id).then(addToLog('fav', false)) : addToFavourite(pet).then(addToLog('fav'))
        } else {
            addToFavourite(pet).then(addToLog('fav'))
        }
        action()
    }

    return(
        <div className={style.container}>
            <div
                className={style.like}
                style={{backgroundImage: "url(" + like + ")"}}
                onClick={() => setReaction(1, 'like')}
            />
            <div
                className={style.fav}
                style={{backgroundImage: "url(" + fav + ")"}}
                onClick={() => actionButtonClick()}
            ></div>
            <div
                className={style.dislike}
                style={{backgroundImage: "url(" + dislike + ")"}}
                onClick={() => setReaction(0, 'dislike')}
            />
        </div>
    );
}

export default ReactionButtonBlock;