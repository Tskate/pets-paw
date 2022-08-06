import React, {useEffect, useState} from "react";
import Selector from "../../UI/Selector/Selector";
import style from './BreedsFilter.module.css'
import SortButton from "../../UI/Buttons/SortButton/SortButton";
import sortIcon from "../../../images/icons/sortIcon/sort-20.svg"
import sortRevertIcon from "../../../images/icons/sortIcon/soft-revert-20.svg"


function BreedsFilter({breedsList, setNewFilter, onClickAsc, onClickDesc}) {
    const breeds = [{value: '', opt:'All breeds'}, ...(breedsList).map(br => { return {value: br.id, opt:br.name}})]
    const limits = [{value:5, opt: 'Limit: 5'}, {value:10, opt: 'Limit: 10'}, {value:15, opt: 'Limit: 15'}, {value:20, opt: 'Limit: 20'}]

    const [order, setOrder] = useState()
    const [breed, setBreed] = useState(breeds[0].value)
    const [limit, setLimit] = useState(limits[0].value)

    const styleForSelect = {backgroundColor: '#F8F8F7', color: '#8C8C8C'}

    useEffect(() => {
        setNewFilter({breed:breed, limit:limit})
    }, [breed, limit]);



    function createFilterObject() {
        if(order === true) {
            return setNewFilter({order: 'ASC', breed:breed, limit:limit})
        } else if (order === false) {
            return setNewFilter({order: 'DESC', breed:breed, limit:limit})
        } else {
            return setNewFilter({order: 'RANDOM', breed:breed, limit:limit})
        }
    }
    return(
        <div className={style.wrapper}>
            <Selector
                styleForSelect={styleForSelect}
                title=''
                options={breeds}
                setSelect={(val) => setBreed(val)}
                styleForDiv = {{flexGrow: 1}}
            />
            <Selector
                styleForSelect={{backgroundColor: '#F8F8F7', color: '#8C8C8C'}}
                title=''
                options={limits}
                setSelect={(val) => setLimit(val)}
            />
            <SortButton icon={sortIcon} onClick={() => onClickAsc()}/>
            <SortButton icon={sortRevertIcon} onClick={() => onClickDesc()}/>
        </div>
    );

}

export default BreedsFilter;