import React from "react";
import styles from './MainOptionsBox.module.css'
import ImageBox from '../UI/ImageBox/ImageBox';
import OptionButton from '../UI/Buttons/OptionButton/OptionButton';
import Vote from '../../images/vote-table.svg'
import Breeds from '../../images/pet-breeds.svg'
import Search from '../../images/images-search.svg'

function MainOptionsBox() {

    return (
        <div className={styles.mainOptBox}>
            <ImageBox img={Vote} background="#B4B7FF"/>
            <ImageBox img={Breeds} background="#97EAB9"/>
            <ImageBox img={Search} background="#FFD280"/>
            <OptionButton text="VOTING" path="voting"/>
            <OptionButton text="BREEDS" path="breeds"/>
            <OptionButton text="GALLERY" path="gallery"/>
        </div>
    );

}

export default MainOptionsBox;