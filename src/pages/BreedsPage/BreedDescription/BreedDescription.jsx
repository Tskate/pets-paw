import React, {useEffect, useState} from "react";
import ActionBar from "../../../components/ActionBar/ActionBar";
import DescriptionContent from "../../../components/BreedsContentBlock/BreedDescriptionContentBlock/DescriptionContent";
import style from '../../GalleryPage/Gallery.module.css'
import {useParams} from "react-router-dom";

function BreedDescription() {
    const breedID = useParams().breed_id;
    const [breedImages, setBreedImages] = useState()

    useEffect(() => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?&breed_ids=${breedID}&limit=5`, {
                headers : {
                    'x-api-key': 'DEMO-API-KEY'
                }
            })
            .then(res => res.json())
            .then(data => setBreedImages(data))
    }, [])


    return(
        <div className={style.body}>
            <ActionBar />
            <DescriptionContent id={breedID}/>
        </div>
    )
}

export default BreedDescription;