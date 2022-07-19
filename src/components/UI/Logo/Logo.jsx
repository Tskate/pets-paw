import React from "react";
import styles from './Logo.module.css'
import logo from './logo.svg'

function Logo() {
    return(
        <div className={styles.logo}>
            <div>
                <img src={logo} alt="logo img"/>
            </div>
            <div className={styles.title}>
                PetsRaw
            </div>
        </div>
    );
}

export default Logo;