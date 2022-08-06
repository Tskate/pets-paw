import React from "react";
import style from './Selector.module.css'

function Selector({className, title, options, setSelect, styleForSelect, styleForDiv}) {
    return(
        <div className={className} style={styleForDiv}>
            <label className={title ? style.title : ''}>
                {title}
            </label>
            <select
                className={style.select}
                onChange={(e) => setSelect(e.target.value) }
                style={styleForSelect}
            >
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.opt}</option> )}
            </select>
        </div>
    );
}

export default Selector;