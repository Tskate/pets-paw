import React from "react";
import style from './LogRecord.module.css'
import icon from '../../../images/forLog/like-color-20.svg'

function LogRecord() {
    return(
      <div className={style.log}>
          <div className={style.time}>22:35</div>
          <div className={style.text}>
              <p>Image ID: <span>{"Tcgfh9"}</span> was {"added"} to {"Likes"}</p>
          </div>
          <div className={style.icon}>
              <img src={icon} alt=""/>
          </div>
      </div>
    );
}

export default LogRecord;