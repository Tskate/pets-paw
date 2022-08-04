import React from "react";
import FilterPanel from "./FilterPanel/FilterPanel";
import style from './GalleryContent.module.css'
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import UploadButton from "../UI/Buttons/ActionButton/UploadBtn/UploadButton";
import GalleryGrid from "./GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";

function GalleryContent({pets, setNewFilters, breeds}) {

    return(
        <div className={style.content}>
            <div className={style.header}>
                <div className={style.leftPart}>
                    <ActionButton icon={icon} />
                    <SectionTitle text="GALLERY"/>
                </div>
                <UploadButton />
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