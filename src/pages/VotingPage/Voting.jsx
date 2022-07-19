import React, {useEffect, useState} from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import style from './Voting.module.css'
import VotingContent from "../../components/VotingContentBlock/VotingContent";

function Voting() {
    const [pet, setPet] = useState(null);
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search", {headers:{'x-api-key': 'DEMO-API-KEY'}})
            .then(res => res.json())
            .then(data => setPet(data))
    },[])

    function isLoadPet() {
        if(pet) {
            return(
                <div className={style.body}>
                    <ActionBar />
                    <VotingContent pet={pet}/>
                </div>
            )
        }
    }
    return(
        isLoadPet()
        // <div className={style.body}>
        //     <ActionBar />
        // {/*//     <VotingContent pet={pet}/>*/}
        // </div>

    );
}

export default Voting;