import React, {useEffect, useState} from "react";
import commonStyle from "./CommonStyles.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ActionButton from "../../components/UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import GalleryGrid from "../../components/GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import NotFoundBlock from "./NotFoundBlock/NotFoundBlock";
import styles from "../../components/UI/Buttons/ReactionsButton/RegularButtons.module.css";

function LikesOrDislikesPage({value}) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/votes`, {
                headers : {
                    'x-api-key': 'DEMO-API-KEY'
                }
            })
                .then(res => res.json())
                .then(data => setResult(data.filter(el => el.value === value).map(el => el.image)))
    }, [value]);

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
                <div className={commonStyle.header}>
                    <ActionButton icon={icon} />
                    <SectionTitle text={value === 1 ? "LIKES" : "DISLIKES"}/>
                </div>
                <div>
                    {renderResult()}
                </div>
            </div>
        </div>
    )
}

export default LikesOrDislikesPage;