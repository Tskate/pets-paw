import React from "react";
import style from "../GalleryPage/Gallery.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import BreedsContent from "../../components/BreedsContentBlock/BreedsContent";

function Breeds({breeds}) {
    return(
        <div className={style.body}>
            <ActionBar />
            <BreedsContent
                // pets={result}
                // setNewFilters={(val) => setFilter(val)}
                breeds={breeds}
            />
        </div>
    );
}

export default Breeds;