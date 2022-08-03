import React, {useState} from "react";
import Selector from "../../UI/Selector/Selector";
import style from './BreedsFilter.module.css'
import SortButton from "../../UI/Buttons/SortButton/SortButton";
import sortIcon from "../../../images/icons/sortIcon/sort-20.svg"
import sortRevertIcon from "../../../images/icons/sortIcon/soft-revert-20.svg"


function BreedsFilter({breedsList}) {
    const breeds = [{value: '', opt:'All breeds'}, ...(breedsList).map(br => { return {value: br.id, opt:br.name}})]
    const limits = [{value:5, opt: 'Limit: 5'}, {value:10, opt: 'Limit: 10'}, {value:15, opt: 'Limit: 15'}, {value:20, opt: 'Limit: 20'}]

    const [breed, setBreed] = useState(breeds[0].value)
    const [limit, setLimit] = useState(limits[0].value)

    const styleForSelect = {backgroundColor: '#F8F8F7', color: '#8C8C8C'}

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
            <SortButton icon={sortIcon}/>
            <SortButton icon={sortRevertIcon}/>
        </div>
    );

}

export default BreedsFilter;