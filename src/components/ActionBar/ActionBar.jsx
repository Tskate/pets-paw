import React from "react";
import SearchBar from "../UI/SearchBar/SearchBar";
import RegularLikeBtn from "../UI/Buttons/ReactionsButton/RegularLikeBtn";
import like from '../../images/icons/default/like.svg'
import fav from '../../images/icons/default/fav.svg'
import dislike from '../../images/icons/default/dislike.svg'
import style from './ActionBar.module.css'

function ActionBar() {
    return(
        <div className={style.bar}>
            <SearchBar />
            <RegularLikeBtn icon={like} />
            <RegularLikeBtn icon={fav} />
            <RegularLikeBtn icon={dislike} />
        </div>
    )
}

export default ActionBar;