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
