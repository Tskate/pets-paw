export function useAddToFavourite(pet) {
   return fetch("https://api.thecatapi.com/v1/favourites",
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-api-key' : '33d0442b-b0dc-4f44-a23d-6eb26431367e'
            },
            body: JSON.stringify({
                "image_id": pet.id,
            })
        })
}

export function useDelFromFavourite(fav_id) {
    return fetch(`https://api.thecatapi.com/v1/favourites/${fav_id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-api-key' : '33d0442b-b0dc-4f44-a23d-6eb26431367e'
            }
        })
}

export function useUploadImage(image) {
    console.log('img', image)
    const formData = new FormData()
    formData.append("file", image, image.name)
    console.log('formData', formData.get('file'))

    return fetch("https://api.thecatapi.com/v1/images/upload",
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'multipart/form-data',
                'x-api-key' : '33d0442b-b0dc-4f44-a23d-6eb26431367e'
            },
            body: formData
        })
}

// export const sendImage = async (data) => {
//     console.log("data,", data);
//     let url = "https://api.thecatapi.com/v1";
//     let response = await fetch("https://api.thecatapi.com/v1/images/upload", {
//         method: "POST",
//         // withCredentials: true,
//         headers: {
//             // "content-Type": "multipart/form-data",
//             "x-api-key": "33d0442b-b0dc-4f44-a23d-6eb26431367e",
//         },
//         body: data,
//     })
//         .then((resp) => resp.json())
//         .then((data) => {
//             console.log("set", data);
//             return data;
//         })
//         .catch((error) => {
//             console.log("err");
//         });
//     return await response;
// };

// export async function useGetAllFavourites() {
//
//     const res = await fetch(`https://api.thecatapi.com/v1/favourites`,
//         {
//             method: 'GET',
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'x-api-key' : 'DEMO-API-KEY'
//             }
//         }).then(res => res.json())
//     return await res;
// }
