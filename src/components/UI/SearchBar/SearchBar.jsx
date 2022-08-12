import React, {useState} from "react";
import icon from '../../../images/icons/default/search.svg'
import style from './SearchBar.module.css'
import ActionButton from "../Buttons/ActionButton/ActionButton";
import {Link, useNavigate} from "react-router-dom";

function SearchBar() {

    const [searchRequest, setSearchRequest] = useState('');
    const navigator = useNavigate()

    return (
        <div className={style.inputDiv}>
            <input
                type="text"
                placeholder="Search for breeds by name"
                value={searchRequest}
                onChange={e => setSearchRequest(e.target.value)}/>
                <ActionButton icon={icon} onClick={() => navigator(`/search/${searchRequest}`) }/>
        </div>
    );
}

export default SearchBar;