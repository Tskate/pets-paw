import React from "react";
import styles from './MainOptionsBox.module.css'
import ImageBox from '../UI/ImageBox/ImageBox';
import OptionButton from '../UI/Buttons/OptionButton/OptionButton';
import Vote from '../../images/vote-table.svg'
import Breeds from '../../images/pet-breeds.svg'
import Search from '../../images/images-search.svg'
import {useLocation} from "react-router-dom";

function MainOptionsBox() {

    const currentPath = useLocation()
    const buttonsItems = {
        voting: {
            text: "VOTING",
            path: "/voting"
        },
        breeds: {
            text: "BREEDS",
            path: "/breeds"
        },
        gallery: {
            text: "GALLERY",
            path: "/gallery"
        }
    }

    return (
        <div className={styles.mainOptBox}>
            <div>
                <ImageBox img={Vote} background="#B4B7FF"/>
                <OptionButton
                    text={buttonsItems.voting.text}
                    path={buttonsItems.voting.path}
                    className={styles.menuBtn}
                    isChosen={currentPath.pathname === buttonsItems.voting.path ? 1 : 0}
                />
            </div>
            <div >
                <ImageBox img={Breeds} background="#97EAB9"/>
                <OptionButton
                    text={buttonsItems.breeds.text}
                    path={buttonsItems.breeds.path}
                    className={styles.menuBtn}
                    isChosen={currentPath.pathname === buttonsItems.breeds.path ? 1 : 0}
                />
            </div>
            <div >
                <ImageBox img={Search} background="#FFD280"/>
                <OptionButton
                    text={buttonsItems.gallery.text}
                    path={buttonsItems.gallery.path}
                    className={styles.menuBtn}
                    isChosen={currentPath.pathname === buttonsItems.gallery.path ? 1 : 0}
                />
            </div>
        </div>
    );

}

export default MainOptionsBox;