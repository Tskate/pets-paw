import React from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import style from './Voting.module.css'
import VotingContent from "../../components/VotingContentBlock/VotingContent";

function Voting() {
    return(
        <div className={style.body}>
            <ActionBar />
            <VotingContent />
        </div>

    );
}

export default Voting;