import React from "react";
import style from './Dot.module.css'

function Dot({number, choseSlideNumber, choseSlide}) {
    return(
        <div
            className={choseSlideNumber===number ? `${style.dot} ${style.selectedDot}` : style.dot}
            onClick={() => choseSlide(number)}
        />
    );
}

export default Dot;