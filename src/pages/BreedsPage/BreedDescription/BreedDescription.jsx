import React, {useEffect, useState} from "react";
import ActionBar from "../../../components/ActionBar/ActionBar";
import DescriptionContent from "../../../components/BreedsContentBlock/BreedDescriptionContentBlock/DescriptionContent";
import {useParams} from "react-router-dom";
import style from '../../CommonBodyStyles.module.css'
import {headerForJSON} from "../../../api/data";

function BreedDescription() {
    const breedID = useParams().breed_id;
    const [breedImages, setBreedImages] = useState()

    useEffect(() => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?&breed_ids=${breedID}&limit=5`, {
                headers : headerForJSON
            })
            .then(res => res.json())
            .then(data => setBreedImages(data))
    }, [])


    return(
        <DescriptionContent id={breedID}/>
    )
}

export default BreedDescription;