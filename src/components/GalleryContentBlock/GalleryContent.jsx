import React, {useContext} from "react";
import FilterPanel from "./FilterPanel/FilterPanel";
import style from './GalleryContent.module.css'
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import UploadButton from "../UI/Buttons/ActionButton/UploadBtn/UploadButton";
import GalleryGrid from "./GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import UploadModalWindow from "./UploadModalWindow/UploadModalWindow";
import {UploadModalWindowContext} from "../../App";
import CommonPageHeader from "../CommonPageHeader/CommonPageHeader";

function GalleryContent({pets, setNewFilters, breeds}) {

    const {setIsActive} = useContext(UploadModalWindowContext);

    function showModalWindow() {
        setIsActive(true)
    }

    return(
        <div className={style.content}>
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