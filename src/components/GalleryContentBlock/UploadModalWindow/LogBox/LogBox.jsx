import React from "react";
import style from "./LogBox.module.css";

function LogBox({logs}) {
    function renderLogs() {
        return logs.map((l, index) => (
            <div className={style.msg} key={`msg-${index}`}>
                <img src={l.icon} alt="status-icon"/>
                <p>{l.msg}</p>
            </div>))

    }

    return(
        <div className={style.logBox}>
            {renderLogs()}
        </div>
    );
}

export default LogBox;