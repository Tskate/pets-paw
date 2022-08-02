import React, {useState, useEffect} from "react";
import style from './GalleryGrid.module.css'
import ImageBlock from "./ImageBlock/ImageBlock";

function GalleryGrid({pets, addToFavourite, removeFromFavourites}) {


    const [actionFav, setActionFav] = useState(false);
    const [favourites, setFavourites] = useState()
    let petsChunks = []

    function chunking(pets) {
        const arr = [...pets]
        const res = [];
        while (arr.length > 0) {
            const chunk = arr.splice(0, 5);
            res.push(chunk);
        }
        return res;
    }

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/favourites`,
            {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'x-api-key' : '33d0442b-b0dc-4f44-a23d-6eb26431367e'
                }
            }).then(res => res.json()).then(data => setFavourites(data))
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