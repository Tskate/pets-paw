import {headerForFormData, headerForJSON, subID} from "../api/data";

export function useAddToFavourite(pet) {
   return fetch("https://api.thecatapi.com/v1/favourites",
        {
            method: 'POST',
            headers: headerForJSON,
            body: JSON.stringify({
                "image_id": pet.id,
                "sub_id": subID
            })
        })
}

export function useDelFromFavourite(fav_id) {
    return fetch(`https://api.thecatapi.com/v1/favourites/${fav_id}`,
        {
            method: 'DELETE',
            headers: headerForJSON
        })
}

export function useUploadImage(image) {
    console.log('img', image)
    const formData = new FormData()
    formData.append("file", image)
    console.log('formData', formData.get('file'))

    return fetch("https://api.thecatapi.com/v1/images/upload",
        {
            method: 'POST',
            headers: headerForFormData,
            body: formData
        })
}
