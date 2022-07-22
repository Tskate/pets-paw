import React, {useState, useEffect} from "react";
import style from './GalleryGrid.module.css'
import ImageBlock from "./ImageBlock/ImageBlock";

function GalleryGrid({pets, addToFavourite, removeFromFavourites}) {
    let counter = 1

    const [actionFav, setActionFav] = useState(false);
    const [favourites, setFavourites] = useState()

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
            return (
                <div className={style.container}>
                    {pets.map(pet =>
                        <ImageBlock
                            key={pet.id}
                            pet={pet}
                            gridArea={{gridArea: 'ar' + counter++}}
                            addToFavourite={addToFavourite}
                            removeFromFavourites={removeFromFavourites}
                            favs={favourites}
                            action={() => setActionFav(!actionFav)}
                        />)
                    }
                </div>
            );
        }
    }

    return(
        isLoad()
    );
}

export default GalleryGrid