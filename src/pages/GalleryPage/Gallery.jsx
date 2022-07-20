import React from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import GalleryContent from "../../components/GalleryContentBlock/GalleryContent";
import style from "./Gallery.module.css"

function Gallery() {
    return(
        <div className={style.body}>
            <ActionBar />
            <GalleryContent />
        </div>
    );
}

export default Gallery;