import React from "react";
import Logo from "../UI/Logo/Logo";
import MainOptionsBox from "./MainOptionsBox";
import styles from './WelcomePagePart.module.css'

function WelcomePagePart() {
    return (
        <div className={styles.main}>
            <Logo />
            <h1>Hi intern!</h1>
            <p>Welcome to MI 2022 Front-end test</p>
            <h5>Lets start using The Dog API</h5>
            <MainOptionsBox />
        </div>
    );
}

export default WelcomePagePart;