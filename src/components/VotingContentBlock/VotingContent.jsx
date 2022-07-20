import React, {useState} from "react";
import style from "./VotingContent.module.css"
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ReactionButtonBlock from "./ReactionButtonBlock/ReactionButtonBlock";
import likeIcon from '../../images/forLog/like-color-20.svg'
import dislikeIcon from '../../images/forLog/dislike-color-20.svg'
import favIcon from '../../images/forLog/fav.svg'
import LogList from "./LogRecord/LogList";

function VotingContent({pet, toNext}) {
    const [logs, setLogs] = useState([])

    function setLikeOrDislike(val) {
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
            }).then(() => setLogs([
                {
                    time: `${new Date().getHours()}:${new Date().getMinutes()}` ,
                    id: pet[0].id,
                    text: 'added to ' + (val ? 'Likes' : 'Dislikes'),
                    icon: val ? likeIcon : dislikeIcon
                }, ...logs]))
            .then(() => toNext())
    }

    function addToFavourite() {
        fetch("https://api.thecatapi.com/v1/favourites",
            {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'x-api-key' : 'DEMO-API-KEY'
                },
                body: JSON.stringify({
                    "image_id": pet[0].id,
                })
            }).then(() => setLogs([
            {
                time: `${new Date().getHours()}:${new Date().getMinutes()}` ,
                id: pet[0].id,
                text: 'added to Favourites',
                icon: favIcon
            }, ...logs]))
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
                    <ReactionButtonBlock setReaction={setLikeOrDislike} addToFavourite={addToFavourite}/>
                </div>
            </div>
            <LogList logs={logs} />

        </div>
    );
}

export default VotingContent;