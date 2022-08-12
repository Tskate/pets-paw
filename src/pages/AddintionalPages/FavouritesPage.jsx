import React, {useEffect, useState} from "react";
import GalleryGrid from "../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../api/hooks/useRequests";
import NotFoundBlock from "./NotFoundBlock/NotFoundBlock";
import commonStyleBody from "../CommonBodyStyles.module.css"
import commonStyle from "./CommonStyles.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Loader from "../../components/UI/Loader/Loader";
import {headerForJSON, subID} from "../../api/data";

function FavouritesPage() {

    const [result, setResult] = useState(null);
    const [isFetching, setIsFetching] = useState(false)
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/favourites?sub_id=${subID}`,
        {
            method: 'GET',
            headers: headerForJSON
        })
            .then(res => res.json())
            .then(data => {
                setResult(data.map(el => el.image))
                setIsFetching(true)
            })
    }, [rerender]);



    function renderResult() {
        if(isFetching) {
            if(result.length) {
                return( <GalleryGrid
                    pets={result}
                    setPets={(data) => setResult(data)}
                    addToFavourite={useAddToFavourite}
                    removeFromFavourites={useDelFromFavourite}
                    isFavPage="true"
                    setRerender={() => setRerender(!rerender)}
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