import React from "react";
import style from './GalleryGrid.module.css'
import ImageBlock from "./ImageBlock/ImageBlock";

function GalleryGrid({pets}) {

    function isLoad() {
        if(pets) {
            return (
                <div className={style.container}>
                    <ImageBlock pet={pets[0]} gridArea={{gridArea: 'ar1'}}/>
                    <ImageBlock pet={pets[1]} gridArea={{gridArea: 'ar2'}}/>
                    <ImageBlock pet={pets[2]} gridArea={{gridArea: 'ar3'}}/>
                    <ImageBlock pet={pets[3]} gridArea={{gridArea: 'ar4'}}/>
                    <ImageBlock pet={pets[4]} gridArea={{gridArea: 'ar5'}}/>
                </div>
            );
        }
    }

    return(
        isLoad()
    );
}

export default GalleryGrid