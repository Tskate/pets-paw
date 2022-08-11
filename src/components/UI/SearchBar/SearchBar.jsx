import React, {useState} from "react";
import icon from '../../../images/icons/default/search.svg'
import style from './SearchBar.module.css'
import ActionButton from "../Buttons/ActionButton/ActionButton";
import {Link} from "react-router-dom";

function SearchBar() {

    const [searchRequest, setSearchRequest] = useState('');

    return (
        <div className={style.inputDiv}>
            <input
                type="text"
                placeholder="Search for breeds by name"
                value={searchRequest}
                onChange={e => setSearchRequest(e.target.value)}/>
            <Link to={{pathname: `/search/${searchRequest}`}}>
                <ActionButton icon={icon} />
            </Link>
        </div>
    );
}

export default SearchBar;