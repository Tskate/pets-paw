import React from "react";
import LogRecord from "./LogRecord";

function LogList({logs}) {
    let key = 0;
    return (
        <div style={{minHeight: '30px', marginTop: '30px'}}>
            {logs.map(l => <LogRecord key={key += 1} info={l}/>)}
        </div>
    )
}

export default LogList;