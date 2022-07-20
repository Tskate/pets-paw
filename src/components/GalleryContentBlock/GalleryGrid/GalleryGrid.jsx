import React from "react";
import style from './GalleryGrid.module.css'
import ImageBlock from "./ImageBlock/ImageBlock";

function GalleryGrid() {
    return(
        <div className={style.container}>
            <ImageBlock gridArea={{gridArea: 'ar1'}}/>
            <ImageBlock gridArea={{gridArea: 'ar2'}}/>
            <ImageBlock gridArea={{gridArea: 'ar3'}}/>
            <ImageBlock gridArea={{gridArea: 'ar4'}}/>
            <ImageBlock gridArea={{gridArea: 'ar5'}}/>
        </div>
    );
}

export default GalleryGrid