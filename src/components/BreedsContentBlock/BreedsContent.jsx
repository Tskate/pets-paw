import React from "react";
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import BreedsFilter from "./BreedsFilterPanel/BreedsFilter";
import style from './BreedsContent.module.css'
import GalleryGrid from "../GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";

function BreedsContent({breeds, pets, setNewFilters, onClickAsc, onClickDesc}) {

    return(
        <div className={style.content}>
            <div className={style.header}>
                <div className={style.leftPart}>
                    <ActionButton icon={icon} />
                    <SectionTitle text="BREEDS"/>
                </div>
                <BreedsFilter
                    breedsList={breeds}
                    setNewFilter={setNewFilters}
                    onClickAsc={onClickAsc}
                    onClickDesc={onClickDesc}
                />
            </div>
            <GalleryGrid
                pets={pets}
                addToFavourite={useAddToFavourite}
                removeFromFavourites={useDelFromFavourite}
                isGallery='false'
            />

        </div>
    );
}

export default BreedsContent;