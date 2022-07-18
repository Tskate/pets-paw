import React from "react";
import ActionBar from "../../components/ActionBar/ActionBar";
import style from './Voting.module.css'
import ReactionButtonBlock from "../../components/ReactionButtonBlock/ReactionButtonBlock";

function Voting() {
    return(
        <div className={style.body}>
            <ActionBar />
            <ReactionButtonBlock />
        </div>

    );
}

export default Voting;