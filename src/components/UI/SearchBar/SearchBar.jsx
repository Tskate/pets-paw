import React from "react";
import icon from '../../../images/icons/default/search.svg'
import style from './SearchBar.module.css'
import ActionButton from "../Buttons/ActionButton/ActionButton";

function SearchBar() {
    return (
        <div className={style.inputDiv}>
            <input type="text" placeholder="Search for breeds by name"/>
            <ActionButton icon={icon} />
        </div>
    );
}

export default SearchBar;