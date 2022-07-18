import React from "react";
import icon from '../../../images/icons/default/search.svg'
import style from './SearchBar.module.css'
import ActionBar from "../../ActionBar/ActionBar";
import ActionButton from "../Buttons/ActionButton/ActionButton";

function SearchBar() {
    return (
        <div className={style.inputDiv}>
            <input type="text" placeholder="Search for breeds by name"/>
            <ActionButton />
        </div>
    );
}

export default SearchBar;