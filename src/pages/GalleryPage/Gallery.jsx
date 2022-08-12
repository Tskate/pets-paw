import React, {useEffect, useState} from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import GalleryContent from "../../components/GalleryContentBlock/GalleryContent";
import style from "../CommonBodyStyles.module.css"
import {headerForJSON} from "../../api/data";

function Gallery({breeds}) {
    const [filter, setFilter] = useState({order:'RANDOM', type:'jpg,png,gif', breed:'', limit:5});
    const [result, setResult] = useState();


    useEffect(() => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?order=${filter.order}&mime_types=${filter.type}&breed_ids=${filter.breed}&limit=${filter.limit}`, {
            headers : headerForJSON
        })
            .then(res => res.json())
            .then(data => setResult(data))
    }, [filter])


    return(
        <div className={style.body}>
            <ActionBar />
            <GalleryContent
                pets={result}
                setNewFilters={(val) => setFilter(val)}
                breeds={breeds}
            />
        </div>
    );
}

export default Gallery;