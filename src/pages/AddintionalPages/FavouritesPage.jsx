import React, {useEffect, useState} from "react";
import GalleryGrid from "../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import NotFoundBlock from "./NotFoundBlock/NotFoundBlock";
import commonStyle from "./CommonStyles.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ActionButton from "../../components/UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";

function FavouritesPage() {

    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/favourites/", {
            headers : {
                'x-api-key': 'DEMO-API-KEY'
            }
        })
            .then(res => res.json())
            .then(data => setResult(data.map(el => el.image)))
    }, []);



    function renderResult() {
        if(result) {
            return( <GalleryGrid
                pets={result}
                addToFavourite={useAddToFavourite}
                removeFromFavourites={useDelFromFavourite}
            />)
        } else {
            return (<NotFoundBlock />)
        }
    }

    return(
        <div className={commonStyle.body}>
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