import React, {useEffect, useState} from "react";
import style from "../CommonBodyStyles.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import BreedsContent from "../../components/BreedsContentBlock/BreedsContent";

function Breeds({breeds}) {

    const [filter, setFilter] = useState({ breed: '', limit:5});
    const [result, setResult] = useState();



    useEffect(() => {
        fetch(
            `https://api.thecatapi.com/v1/images/search?&breed_ids=${filter.breed}&limit=${filter.limit}`, {
                headers : {
                    'x-api-key': 'DEMO-API-KEY'
                }
            })
            .then(res => res.json())
            .then(data => setResult(data))
    }, [filter])


    function sorting() {
        let obj = result
        let res1 = {}

        // console.log('original ', obj)
        Object.keys(obj).sort((a, b) => {

            if(obj[b].breeds.length === 0 || obj[a].breeds.length === 0 ) {
                if(obj[a].breeds.length === 0  && obj[b].breeds.length !== 0 )
                // {console.log('-1', obj[b].breeds[0].name)
                //     console.log(obj)
                    return -1
                else if (obj[b].breeds.length === 0  && obj[a].breeds.length !== 0 )
                // {console.log('1', obj[a].breeds[0].name)
                //     console.log(obj)
                    return 1
                return 0
            }
            else {
                if (obj[a].breeds[0].name < obj[b].breeds[0].name ){
                    return -1;
                }
                if (obj[a].breeds[0].name > obj[b].breeds[0].name){
                    return 1;
                }
                return 0;
            }

        }).forEach(function (v) { res1[v] = result[v]; });



        // console.log('sorted ', res1)

    }

    return(
        <div className={style.body}>
            <ActionBar />
            <BreedsContent
                pets={result}
                setNewFilters={(val) => setFilter(val)}
                breeds={breeds}
                onClickAsc={() => sorting()}
                onClickDesc={() => sorting()}
            />
        </div>
    );
}

export default Breeds;