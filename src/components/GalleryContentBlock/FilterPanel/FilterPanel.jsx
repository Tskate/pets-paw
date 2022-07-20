import React from "react";
import style from './FilterPanel.module.css'
import Selector from "../../UI/Selector/Selector";
import ActionButtonWhite from "../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from "../../../images/icons/default/round-arrow.svg";

function FilterPanel() {
    const order = ['Random', 'Desc', 'Asc']
    const type = ['All', 'Static', 'Animated']
    const breed = ['None']
    const limit = ['5', '10', '15', '20'].map(l => l + ' items per page')


    return(
        <div className={style.container}>
            <Selector title="ORDER" options={order}/>
            <Selector title="TYPE" options={type}/>
            <Selector title="BREED" options={breed}/>
            <div className={style.selectorWithBtn}>
                <Selector className={style.wrapper} title="LIMIT" options={limit}/>
                <ActionButtonWhite icon={icon}/>
            </div>
        </div>
    );
}

export default FilterPanel;