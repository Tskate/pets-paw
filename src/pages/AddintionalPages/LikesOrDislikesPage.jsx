import React, {useEffect, useState} from "react";
import commonStyle from "./CommonStyles.module.css";
import commonStyleBody from "../CommonBodyStyles.module.css"
import ActionBar from "../../components/ActionBar/ActionBar";
import GalleryGrid from "../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import NotFoundBlock from "./NotFoundBlock/NotFoundBlock";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Loader from "../../components/UI/Loader/Loader";
import {headerForJSON, subID} from "../../api/data";

function LikesOrDislikesPage({value}) {
    const [result, setResult] = useState(null);
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/votes?sub_id=${subID}`, {
                headers : headerForJSON
            })
                .then(res => res.json())
                .then(data => {
                    setResult(data.filter(el => el.value === value).map(el => el.image))
                    setIsFetching(true)
                })
    }, [value]);
    
    function renderResult() {
        if(isFetching) {
            if(result.length) {
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
        <div className={commonStyle.content}>
            <CommonPageHeader title={value === 1 ? "LIKES" : "DISLIKES"}/>
            <div>
                {renderResult()}
            </div>
        </div>
    )
}

export default LikesOrDislikesPage;