import React, {useState, useEffect} from "react";
import style from './FilterPanel.module.css'
import Selector from "../../UI/Selector/Selector";
import ActionButtonWhite from "../../UI/Buttons/ActionButton/WhiteBtn/ActionButtonWhite";
import icon from "../../../images/icons/default/round-arrow.svg";
import iconHover from '../../../images/icons/white/update-white-20.svg'

function FilterPanel({setNewFilters, breedsList}) {
    const orders = [{value:'RANDOM', opt:'Random'}, {value:'DESC', opt:'Desc'}, {value:'ASC', opt:'Asc'}]
    const types = [{value:'jpg,gif,png', opt:'All'}, {value:'jpg,png', opt:'Static'}, {value:'gif', opt:'Animated'}]
    const breeds = [{value: '', opt:'None'}, ...(breedsList).map(br => { return {value: br.id, opt:br.name}})]
    const limits = [{value:5, opt: '5 items per page'}, {value:10, opt: '10 items per page'}, {value:15, opt: '15 items per page'}, {value:20, opt: '20 items per page'}]

    const [order, setOrder] = useState(orders[0].value)
    const [type, setOType] = useState(types[0].value)
    const [breed, setBreed] = useState(breeds[0].value)
    const [limit, setLimit] = useState(limits[0].value)


    function createFilterObject() {
        setNewFilters({order: order, type:type, breed:breed, limit:limit})
    }

    return(
        <div className={style.container}>
            <Selector
                title="ORDER"
                options={orders}
                setSelect={val => setOrder(val)}
            />
            <Selector
                title="TYPE"
                options={types}
                setSelect={val => setOType(val)}/>
            <Selector
                title="BREED"
                options={breeds}
                setSelect={(val) => setBreed(val)}
            />
            <div className={style.selectorWithBtn}>
                <Selector
                    className={style.wrapper}
                    title="LIMIT"
                    options={limits}
                    setSelect={(val) => setLimit(val)}
                />
                <ActionButtonWhite
                    icon={icon}
                    iconHover={iconHover}
                    onClick={createFilterObject}
                    className={style.update}/>
            </div>
        </div>
    );
}

export default FilterPanel;