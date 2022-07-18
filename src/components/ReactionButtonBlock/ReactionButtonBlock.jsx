import React from "react";
import style from './ReactionButtonBlock.module.css'
import like from '../../images/icons/default/likeW.svg'
import fav from '../../images/icons/default/favW.svg'
import dislike from '../../images/icons/default/dislikeW.svg'

function ReactionButtonBlock() {
    return(
        <div className={style.container}>
            <div className={style.like} style={{backgroundImage: "url(" + like + ")"}}></div>
            <div className={style.fav} style={{backgroundImage: "url(" + fav + ")"}}></div>
            <div className={style.dislike} style={{backgroundImage: "url(" + dislike + ")"}}></div>
        </div>
    );
}

export default ReactionButtonBlock;