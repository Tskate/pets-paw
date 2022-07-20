import React from "react";
import style from './Selector.module.css'

function Selector({className, title, options}) {
    return(
        <div className={className}>
            <label className={style.title}>
                {title}
            </label>
            <select className={style.select}>
                {options.map(opt => <option key={opt} value={opt}>{opt}</option> )}
            </select>
        </div>
    );
}

export default Selector;