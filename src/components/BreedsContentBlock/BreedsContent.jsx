import React from "react";
import BreedsFilter from "./BreedsFilterPanel/BreedsFilter";
import style from './BreedsContent.module.css'
import commonStyle from '../CommonStyles/CommonPageStyles.module.css'
import GalleryGrid from "../GalleryContentBlock/GalleryGrid/GalleryGrid";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import CommonPageHeader from "../CommonPageHeader/CommonPageHeader";

function BreedsContent({breeds, pets, setNewFilters, onClickAsc, onClickDesc}) {

    return(
        <div className={commonStyle.content}>
            <div className={style.header}>
                <CommonPageHeader title="BREEDS"/>
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