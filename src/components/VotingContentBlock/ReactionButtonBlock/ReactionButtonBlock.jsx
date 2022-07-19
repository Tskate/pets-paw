import React from "react";
import style from './ReactionButtonBlock.module.css'
import like from '../../../images/icons/default/likeW.svg'
import fav from '../../../images/icons/default/favW.svg'
import dislike from '../../../images/icons/default/dislikeW.svg'

function ReactionButtonBlock({setReaction, addToFavourite}) {
    return(
        <div className={style.container}>
            <div
                className={style.like}
                style={{backgroundImage: "url(" + like + ")"}}
                onClick={() => setReaction(1)}
            />
            <div
                className={style.fav}
                style={{backgroundImage: "url(" + fav + ")"}}
                onClick={() => addToFavourite()}
            ></div>
            <div
                className={style.dislike}
                style={{backgroundImage: "url(" + dislike + ")"}}
                onClick={() => setReaction(0)}
            />
        </div>
    );
}

export default ReactionButtonBlock;