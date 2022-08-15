import React, {useEffect, useState} from "react";
import style from "../CommonBodyStyles.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import BreedsContent from "../../components/BreedsContentBlock/BreedsContent";
import {headerForJSON} from "../../api/data";

function Breeds({breeds}) {

    const [filter, setFilter] = useState({ breed: '', limit:5});
    const [result, setResult] = useState();



    useEffect(() => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?&breed_ids=${filter.breed}&limit=${filter.limit}&has_breeds=1`, {
                headers : headerForJSON
            })
            .then(res => res.json())
            .then(data => setResult(data))
    }, [filter])


    function sorting(isASC) {
        let sortedRes = []

        if(isASC) {
            Object.keys(result).sort((a,b) => result[a].breeds[0].name > result[b].breeds[0].name ? 1 : -1)
                .forEach(o => sortedRes.push(result[o]));
        } else {
            Object.keys(result).sort((a,b) => result[a].breeds[0].name < result[b].breeds[0].name ? 1 : -1)
                .forEach(o => sortedRes.push(result[o]));
        }
        sortedRes = JSON.stringify(sortedRes)

        setResult(JSON.parse(sortedRes))

    }

    return(
            <BreedsContent
                pets={result}
                setNewFilters={(val) => setFilter(val)}
                breeds={breeds}
                onClickAsc={() => sorting(1)}
                onClickDesc={() => sorting(0)}
            />
    );
}

export default Breeds;