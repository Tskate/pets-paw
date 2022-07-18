import React from "react";
import SearchBar from "../UI/SearchBar/SearchBar";
import RegularReactionBtn from "../UI/Buttons/ReactionsButton/RegularReactionBtn";
import like from '../../images/icons/default/like.svg'
import fav from '../../images/icons/default/fav.svg'
import dislike from '../../images/icons/default/dislike.svg'
import style from './ActionBar.module.css'

function ActionBar() {
    return(
        <div className={style.bar}>
            <SearchBar />
            <RegularReactionBtn icon={like} />
            <RegularReactionBtn icon={fav} />
            <RegularReactionBtn icon={dislike} />
        </div>
    )
}

export default ActionBar;