import React from "react";
import style from './CustomThemeSwitch.module.css'
import dayIcon from '../../images/icons/theme/day.svg'
import {useTheme} from "../../hooks/useTheme"
import nightIcon from '../../images/icons/theme/night.svg'

function CustomThemeSwitch() {
    const {theme, setTheme} = useTheme()

    return(
        <div className={style.container}>
            <div className={style.icon}>
                <img src={theme ? dayIcon : nightIcon} alt="theme-icon"/>
            </div>
            <label className={style.switch}>
                <input
                    type="checkbox"
                    checked={theme.toString() === 'true'}
                    onChange={() => setTheme(!theme)}
                />
                <span className={style.slider}></span>
            </label>
        </div>
    );
}

export default CustomThemeSwitch;