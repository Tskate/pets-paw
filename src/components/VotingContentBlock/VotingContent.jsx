import React, {useState, useEffect} from "react";
import style from "./VotingContent.module.css"
import commonStyle from '../CommonStyles/CommonPageStyles.module.css'
import ReactionButtonBlock from "./ReactionButtonBlock/ReactionButtonBlock";
import likeIcon from '../../images/forLog/like-color-20.svg'
import dislikeIcon from '../../images/forLog/dislike-color-20.svg'
import favIcon from '../../images/forLog/fav-blank.svg'
import removeIcon from '../../images/forLog/error-20.svg'
import LogList from "./LogRecord/LogList";
import {useAddToFavourite, useDelFromFavourite} from "../../hooks/useRequests";
import CommonPageHeader from "../CommonPageHeader/CommonPageHeader";
import Loader from "../UI/Loader/Loader";
import {headerForJSON, subID} from "../../api/data";

function VotingContent({pet, toNext}) {
    const [logs, setLogs] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const [actionFav, setActionFav] = useState(false);
    const [favourites, setFavourites] = useState()

    const sections = {
        fav : {name: 'Favorites', icon : favIcon},
        dislike : {name: 'Dislikes', icon : dislikeIcon},
        like : {name: 'Likes', icon : likeIcon}
    }

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/favourites?sub_id=paw-user-123`,
            {
                method: 'GET',
                headers: headerForJSON
            })
            .then(res => res.json())
            .then(data => {
                setFavourites(data)
                setIsFetching(true)
            })
    }, [actionFav]);

    function setLikeOrDislike(val, sectionName, isAdded=true) {
        fetch("https://api.thecatapi.com/v1/votes",
            {
                method: 'POST',
                headers: headerForJSON,
                body: JSON.stringify({
                    "image_id": pet[0].id,
                    "sub_id": subID,
                    "value": val
                })
            })
            .then(() => addToLog(sectionName, isAdded))
            .then(() => toNext())
    }



    function addToLog(sectionName, isAdded=true) {
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

    function renderContent() {
        if(isFetching) {
            return(
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
            );
        } else {
            return (<Loader />)
        }
    }

    return(
        <div className={commonStyle.content}>
            <CommonPageHeader title="VOTING"/>
            {renderContent()}
            <LogList logs={logs} />
        </div>
    );
}

export default VotingContent;