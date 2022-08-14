import React, {useEffect, useState} from "react";
import commonBodyStyle from '../../CommonBodyStyles.module.css'
import commonStyle from '../CommonStyles.module.css'
import ActionBar from "../../../components/ActionBar/ActionBar";
import GalleryGrid from "../../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../../hooks/useRequests";
import {useParams} from "react-router-dom";
import NotFoundBlock from "../NotFoundBlock/NotFoundBlock";
import CommonPageHeader from "../../../components/CommonPageHeader/CommonPageHeader";
import Loader from "../../../components/UI/Loader/Loader";
import {headerForJSON} from "../../../api/data";

function SearchPage({breeds}) {

    const request = useParams().request
    const [result, setResult] = useState(null);
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        const breed = breeds.filter(br => br.name.toLowerCase()===request.toLowerCase())
        console.log('breed', breed)
        if(breed.length) {
            fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${breed[0].id}&limit=10`, {
                    headers : headerForJSON
                })
                .then(res => res.json())
                .then(data => {
                    setResult(data)
                    setIsFetching(true)
                })
        } else {
            setResult(null)
            setIsFetching(true)
        }
    }, [request]);

    function renderResult() {
        if(isFetching) {
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
        } else {
            return (<Loader />)
        }
    }

    return(
        <div className={commonBodyStyle.body}>
            <ActionBar />
            <div className={commonStyle.content}>
                <CommonPageHeader title="SEARCH"/>
                <div>
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