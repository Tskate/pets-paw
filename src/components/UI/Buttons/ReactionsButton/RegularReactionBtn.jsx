import React from "react";
import styles from './RegularButtons.module.css'
import {Link} from "react-router-dom";

function RegularReactionBtn({props, isChosen}) {
    return(
        <div className={styles.btn} style={isChosen ? {backgroundColor: '#FF868E'} : {}}>
            <Link to={props.path}>
                <img src={isChosen ? props.iconChosen : props.icon} alt="icon"/>
            </Link>
        </div>
    )
}

export default RegularReactionBtn;