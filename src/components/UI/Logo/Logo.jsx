import React from "react";
import styles from './Logo.module.css'
import logo from './logo.svg'
import {Link} from "react-router-dom";

function Logo() {
    return(
        <div>
            <Link to="/" className={styles.link}>
                <div>
                    <img src={logo} alt="logo img"/>
                </div>
                <div className={styles.title}>
                    PetsRaw
                </div>
            </Link>
        </div>
    );
}

export default Logo;