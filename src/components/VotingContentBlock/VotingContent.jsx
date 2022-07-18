import React from "react";
import style from "./VotingContent.module.css"
import ActionButton from "../UI/Buttons/ActionButton/ActionButton";
import icon from "../../images/icons/default/back.svg";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ReactionButtonBlock from "./ReactionButtonBlock/ReactionButtonBlock";
import LogRecord from "./LogRecord/LogRecord";

function VotingContent() {
    return(
        <div className={style.content}>
            <div className={style.header}>
                <ActionButton icon={icon} />
                <SectionTitle text="VOTING"/>
            </div>
            <div className={style.img}>
                <img src="" alt="pet-photo"/>
            </div>
            <ReactionButtonBlock />
            <div>
                <LogRecord />
                <LogRecord />
                <LogRecord />
            </div>

        </div>
    );
}

export default VotingContent;