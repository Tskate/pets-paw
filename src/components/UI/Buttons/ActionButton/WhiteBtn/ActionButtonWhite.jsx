import React, {useState} from "react";
import styles from './ActionButtonWhite.module.css'

function ActionButtonWhite({icon, iconHover, className, style, onClick}) {
    const [iconSrc, setIconSrc] = useState(icon)

    return(
        <div
            className={`${styles.searchBtn} ${className}`}
            onClick={() => onClick()} style={style}
            onMouseOver={() => setIconSrc(iconHover)}
            onMouseOut={() => setIconSrc(icon)}
        >
            <img
                src={iconSrc}
                alt="search-icon"
            />
        </div>
    );
}

export default ActionButtonWhite;