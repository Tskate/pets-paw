import React, {useState, useEffect} from "react";
import style from "./VotingContent.module.css"
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ReactionButtonBlock from "./ReactionButtonBlock/ReactionButtonBlock";
import likeIcon from '../../images/forLog/like-color-20.svg'
import dislikeIcon from '../../images/forLog/dislike-color-20.svg'
import favIcon from '../../images/forLog/fav-blank.svg'
import removeIcon from '../../images/forLog/error-20.svg'
import LogList from "./LogRecord/LogList";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";

function VotingContent({pet, toNext}) {
    const [logs, setLogs] = useState([])

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

    function setLikeOrDislike(val, sectionName, isAdded=true) {
        fetch("https://api.thecatapi.com/v1/votes",
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'x-api-key' : 'DEMO-API-KEY'
                },
                body: JSON.stringify({
                    "image_id": pet[0].id,
                    "value": val
                })
            })
            .then(() => addToLog(sectionName, isAdded))
            .then(() => toNext())
    }

    function addToLog(sectionName, isAdded=true) {
        const sections = {
            fav : {name: 'Favorites', icon : favIcon},
            dislike : {name: 'Dislikes', icon : dislikeIcon},
            like : {name: 'Likes', icon : likeIcon}
        }

        const newLog = {
            time: `${new Date().getHours()}:${new Date().getMinutes()}` ,
            id: pet[0].id,
        }

        if(isAdded) {
            newLog.text = 'added to ' + sections[sectionName].name
            newLog.icon = sections[sectionName].icon
        } else {
            newLog.text = 'removed from ' + sections[sectionName].name
            newLog.icon = removeIcon
        }
        setLogs([newLog, ...logs])
    }

    return(
        <div className={style.content}>
            <div className={style.header}>
                <ActionButton icon={icon} />
                <SectionTitle text="VOTING"/>
                
            </div>
            <div className={style.img}>
                <img src={pet[0].url} alt="pet-photo"/>
                <div className={style.btnContainer}>
                    <ReactionButtonBlock
                        pet={pet[0]}
                        setReaction={setLikeOrDislike}
                        addToFavourite={useAddToFavourite}
                        removeFromFavourites={useDelFromFavourite}
                        favs={favourites}
                        action={() => setActionFav(!actionFav)}
                        addToLog={addToLog}
                    />

                </div>
            </div>
            <LogList logs={logs} />

        </div>
    );
}

export default VotingContent;