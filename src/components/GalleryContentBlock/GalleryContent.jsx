import React, {useContext} from "react";
import FilterPanel from "./FilterPanel/FilterPanel";
import style from './GalleryContent.module.css'
import commonStyle from '../CommonStyles/CommonPageStyles.module.css'
import UploadButton from "../UI/Buttons/ActionButton/UploadBtn/UploadButton";
import GalleryGrid from "./GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import {UploadModalWindowContext} from "../../App";
import CommonPageHeader from "../CommonPageHeader/CommonPageHeader";

function GalleryContent({pets, setNewFilters, breeds}) {

    const {setIsActive} = useContext(UploadModalWindowContext);

    function showModalWindow() {
        setIsActive(true)
    }

    return(
        <div className={commonStyle.content + " " + style.mediaContent}>
            <div className={style.header}>
                <CommonPageHeader title="GALLERY"/>
                <UploadButton onclick={showModalWindow}/>
            </div>
            <FilterPanel setNewFilters={setNewFilters} breedsList={breeds}/>
            <GalleryGrid
                pets={pets}
                addToFavourite={useAddToFavourite}
                removeFromFavourites={useDelFromFavourite}
            />
        </div>
    );
}

export default GalleryContent;