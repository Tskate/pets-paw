import React from "react";
import style from './SectionTitle.module.css'

function SectionTitle({text, isDefault=false}) {
    return(
        <div className={isDefault ? `${style.title} ${style.defaultTitle}` : style.title}>
            {text}
        </div>
    )
}

export default SectionTitle;