import React, {useContext} from "react";
import ActionButtonWhite from "../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from "../../images/icons/default/close-icon.svg";
import iconHover from '../../images/icons/white/close-white-20.svg'
import MainOptionsBox from "../WelcomePagePart/MainOptionsBox";
import style from './MenuModalWindow.module.css'
import {MenuContext} from "../../App";
import CustomThemeSwitch from "../ThemeSwitch/CustomThemeSwitch";

function MenuModalWindow() {
    const {isActive, setIsActive} = useContext(MenuContext);

    function closeModalWindow() {
        setIsActive(false)
    }
    return(
        <div className={isActive ? style.modalWindow : style.hidden}>
            <div className={style.header}>
                <CustomThemeSwitch />
                <ActionButtonWhite
                    icon={icon}
                    iconHover={iconHover}
                    onClick={closeModalWindow}/>
            </div>
            <MainOptionsBox/>
        </div>
    );
}

export default MenuModalWindow;