import React, {useEffect, useState} from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import style from '../CommonBodyStyles.module.css'
import VotingContent from "../../components/VotingContentBlock/VotingContent";
import {headerForJSON} from "../../api/data";

function Voting() {
    const [pet, setPet] = useState(null);
    const [next, setNext] = useState(false)

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search", {
            headers:headerForJSON
        })
            .then(res => res.json())
            .then(data => setPet(data))
    },[next])

    function showNext() {
        setNext(!next)
    }

    function isLoadPet() {
        if(pet) {
            return(
                    <VotingContent pet={pet} toNext={showNext}/>
            )
        }
    }
    return(
        isLoadPet()
    );
}

export default Voting;