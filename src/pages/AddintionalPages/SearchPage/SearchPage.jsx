import React, {useEffect, useState} from "react";
import commonStyle from '../CommonStyles.module.css'
import ActionBar from "../../../components/ActionBar/ActionBar";
import style from "../../../components/BreedsContentBlock/BreedsContent.module.css";
import ActionButton from "../../../components/UI/Buttons/ActionButton/ActionButton";
import icon from "../../../images/icons/default/back.svg";
import SectionTitle from "../../../components/UI/SectionTitle/SectionTitle";
import GalleryGrid from "../../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../../hooks/useRequests";
import {useParams} from "react-router-dom";
import NotFoundBlock from "../NotFoundBlock/NotFoundBlock";

function SearchPage({breeds}) {

    const request = useParams().request
    const [result, setResult] = useState(null);

    useEffect(() => {
        const breed = breeds.filter(br => br.name.toLowerCase()===request.toLowerCase())
        console.log('breed', breed)
        if(breed.length) {
            fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${breed[0].id}&limit=10`, {
                    headers : {
                        'x-api-key': 'DEMO-API-KEY'
                    }
                })
                .then(res => res.json())
                .then(data => setResult(data))
        } else {
           setResult(null)
        }
    }, [request]);

    function renderResult() {
        if(result) {
           return( <GalleryGrid
                pets={result}
                addToFavourite={useAddToFavourite}
                removeFromFavourites={useDelFromFavourite}
                isGallery='false'
            />)
        } else {
            return (<NotFoundBlock />)
        }
    }

    return(
        <div className={commonStyle.body}>
            <ActionBar />
            <div className={commonStyle.content}>
                <div className={commonStyle.header}>
                    <ActionButton icon={icon} />
                    <SectionTitle text="SEARCH"/>
                </div>
                <div className={style.info}>
                    <p style={{color: '#8C8C8C'}}>Search results for: <span>{request}</span></p>
                </div>
                <div>
                    {renderResult()}
                </div>
            </div>
        </div>
    );
}

export default SearchPage;