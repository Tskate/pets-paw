import React from "react";
import Logo from "../UI/Logo/Logo";
import MainOptionsBox from "./MainOptionsBox";
import styles from './WelcomePagePart.module.css'
import CustomThemeSwitch from "../UI/Switch/CustomThemeSwitch";

function WelcomePagePart() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Logo />
                <CustomThemeSwitch />
            </div>
            <h1>Hi intern!</h1>
            <p>Welcome to MI 2022 Front-end test</p>
            <h5>Lets start using The Cat API</h5>
            <MainOptionsBox />
        </div>
    );
}

export default WelcomePagePart;