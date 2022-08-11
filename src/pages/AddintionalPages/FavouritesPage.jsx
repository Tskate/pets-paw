import React, {useEffect, useState} from "react";
import GalleryGrid from "../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import NotFoundBlock from "./NotFoundBlock/NotFoundBlock";
import commonStyleBody from "../CommonBodyStyles.module.css"
import commonStyle from "./CommonStyles.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Loader from "../../components/UI/Loader/Loader";

function FavouritesPage() {

    const [result, setResult] = useState(null);
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/favourites/", {
            headers : {
                'x-api-key': 'DEMO-API-KEY'
            }
        })
            .then(res => res.json())
            .then(data => {
                setResult(data.map(el => el.image))
                setIsFetching(true)
            })
    }, []);



    function renderResult() {
        if(isFetching) {
            if(result) {
                return( <GalleryGrid
                    pets={result}
                    addToFavourite={useAddToFavourite}
                    removeFromFavourites={useDelFromFavourite}
                />)
            } else {
                return (<NotFoundBlock />)
            }
        } else {
            return (<Loader />)
        }

    }

    return(
        <div className={commonStyleBody.body}>
            <ActionBar />
            <div className={commonStyle.content}>
                <CommonPageHeader title="FAVOURITES"/>
                <div>
                    {renderResult()}
                </div>
            </div>
        </div>
    )
}

export default FavouritesPage;