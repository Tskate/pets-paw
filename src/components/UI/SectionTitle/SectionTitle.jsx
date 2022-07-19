import React from "react";
import style from './SectionTitle.module.css'

function SectionTitle({text}) {
    return(
        <div className={style.title}>
            {text}
        </div>
    )
}

export default SectionTitle;