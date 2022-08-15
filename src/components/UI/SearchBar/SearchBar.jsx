import React, {useState} from "react";
import icon from '../../../images/icons/default/search.svg'
import iconHover from '../../../images/icons/white/search-white-20.svg'
import style from './SearchBar.module.css'
import ActionButton from "../Buttons/ActionButton/ActionButton";
import {useNavigate} from "react-router-dom";

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
                <ActionButton icon={icon} iconHover={iconHover} onClick={() => navigator(`/search/${searchRequest}`) }/>
        </div>
    );
}

export default SearchBar;