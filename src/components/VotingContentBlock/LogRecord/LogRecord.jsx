import React from "react";
import style from './LogRecord.module.css'

function LogRecord({info}) {
    return(
      <div className={style.log}>
          <div className={style.time}>{info.time}</div>
          <div className={style.text}>
              <p>Image ID: <span>{info.id}</span> was {info.text}</p>
          </div>
          <div className={style.icon}>
              <img src={info.icon} alt="action-icon"/>
          </div>
      </div>
    );
}

export default LogRecord;