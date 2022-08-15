import React, {useState, useEffect} from "react";
import style from './GalleryGrid.module.css'
import ImageBlock from "./ImageBlock/ImageBlock";
import {headerForJSON, subID} from "../../../api/data";

function GalleryGrid({pets, addToFavourite, removeFromFavourites, isGallery=true, isFavPage=false, setRerender}) {

    const [actionFav, setActionFav] = useState(false);
    const [favourites, setFavourites] = useState()
    let petsChunks = []

    function chunking(petsArr) {
        const arr = [...petsArr]
        const res = [];
        while (arr.length > 0) {
            const chunk = arr.splice(0, 5);
            res.push(chunk);
        }
        return res;
    }

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/favourites?sub_id=${subID}`,
            {
                method: 'GET',
                headers: headerForJSON
            })
            .then(res => res.json())
            .then(data => {
                if(isFavPage) {
                    setRerender()
                }
                setFavourites(data)
            })
    }, [actionFav]);



    function isLoad() {
        if(pets) {
            petsChunks = chunking(pets)
            return (
                   <div className={style.mainContainer}>
                       {petsChunks.map((chunk, index) =>
                           <div key={index} className={index % 2 ? style.container2 : style.container1}>
                               {chunk.map((pet, index) =>
                                       <ImageBlock
                                        key={pet.id}
                                        pet={pet}
                                        gridArea={{gridArea: 'ar' + index}}
                                        addToFavourite={addToFavourite}
                                        removeFromFavourites={removeFromFavourites}
                                        favs={favourites}
                                        action={() => setActionFav(!actionFav)}
                                        isGallery={isGallery}
                               />)}
                           </div>
                       )}
                   </div>
            );
        }
    }

    return(
        isLoad()
    );
}

export default GalleryGrid