import React from "react";
import SearchBar from "../UI/SearchBar/SearchBar";
import RegularReactionBtn from "../UI/Buttons/ReactionsButton/RegularReactionBtn";
import like from '../../images/icons/default/like.svg'
import likeChosen from '../../images/icons/white/like-white-30.svg'
import fav from '../../images/icons/default/fav.svg'
import favChosen from '../../images/icons/white/fav-white-30.svg'
import dislike from '../../images/icons/default/dislike.svg'
import dislikeChosen from '../../images/icons/white/dislike-white-30.svg'
import style from './ActionBar.module.css'
import {useLocation} from "react-router-dom";

function ActionBar() {
    const currentPath = useLocation()
    const menuItems = {
        likes: {
            icon: like,
            iconChosen: likeChosen,
            path: "/likes"
        },
        fav: {
            icon: fav,
            iconChosen: favChosen,
            path: "/favourites"
        },
        dislikes: {
            icon: dislike,
            iconChosen: dislikeChosen,
            path: "/dislikes"
        }
    }

    return(
        <div className={style.bar}>
            <SearchBar/>
            <RegularReactionBtn
                props={menuItems.likes}
                isChosen={currentPath.pathname === menuItems.likes.path ? 1 : 0}
            />
            <RegularReactionBtn
                props={menuItems.fav}
                isChosen={currentPath.pathname === menuItems.fav.path ? 1 : 0}
            />
            <RegularReactionBtn
                props={menuItems.dislikes}
                isChosen={currentPath.pathname === menuItems.dislikes.path ? 1 : 0}
            />
        </div>
    )
}

export default ActionBar;