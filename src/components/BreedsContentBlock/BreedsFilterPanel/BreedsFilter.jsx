import React, {useEffect, useState} from "react";
import Selector from "../../UI/Selector/Selector";
import style from './BreedsFilter.module.css'
import SortButton from "../../UI/Buttons/SortButton/SortButton";
import sortIcon from "../../../images/icons/sortIcon/sort-20.svg"
import sortIconActive from "../../../images/icons/sortIcon/sort-color-20.svg"
import sortRevertIcon from "../../../images/icons/sortIcon/soft-revert-20.svg"
import sortRevertIconActive from "../../../images/icons/sortIcon/sort-revert-color-20.svg"


function BreedsFilter({breedsList, setNewFilter, onClickAsc, onClickDesc}) {
    const breeds = [{value: '', opt:'All breeds'}, ...(breedsList).map(br => { return {value: br.id, opt:br.name}})]
    const limits = [{value:5, opt: 'Limit: 5'}, {value:10, opt: 'Limit: 10'}, {value:15, opt: 'Limit: 15'}, {value:20, opt: 'Limit: 20'}]
    const defaultSort = {asc: 0, desc: 0}

    const [breed, setBreed] = useState(breeds[0].value)
    const [limit, setLimit] = useState(limits[0].value)

    const [order, setOrder] = useState(defaultSort)


    const styleForSelect = {backgroundColor: 'var(--breed-page-select-bg-color)', color: '#8C8C8C'}
    const styleForSortButton = {border: '2px solid var(--btn-color)'}

    useEffect(() => {
        setNewFilter({breed:breed, limit:limit})
    }, [breed, limit]);

    function sortAsc() {
        if(order.asc === 0) {
            setOrder({asc: 1, desc: 0})
            onClickAsc()
        } else {
            setOrder(defaultSort)
        }
    }

    function sortDesc() {
        if (order.desc === 0) {
            setOrder({asc: 0, desc: 1})
            onClickDesc()
        } else {
            setOrder(defaultSort)
        }
    }

    return(
        <div className={style.wrapper}>
            <Selector
                styleForSelect={{gridArea: 'breeds', ...styleForSelect}}
                title=''
                options={breeds}
                setSelect={(val) => setBreed(val)}
                styleForDiv = {{flexGrow: 2}}
            />
            <div className={style.filters}>
                <Selector
                    styleForSelect={styleForSelect}
                    title=''
                    options={limits}
                    setSelect={(val) => setLimit(val)}
                    styleForDiv = {{flexGrow: 1, minWidth: '82px'}}
                />
                <SortButton
                    icon={order.asc ? sortIconActive : sortIcon}
                    onClick={sortAsc}
                    style={order.asc ? styleForSortButton : {}}
                />
                <SortButton
                    icon={order.desc? sortRevertIconActive : sortRevertIcon}
                    onClick={sortDesc}
                    style={order.desc ? styleForSortButton : {}}
                />
            </div>
        </div>
    );

}

export default BreedsFilter;