import React from "react";
import styles from './Main.module.css'
import img from '../../images/girl-and-pet.svg'

function Main() {
    return(
        <div className={styles.main}>
            <div className={styles.background}/>
            <div className={styles.imgDiv}>
                <img className={styles.imgGirl} src={img} alt="girl and pet"/>
            </div>
        </div>
    );
}

export default Main;