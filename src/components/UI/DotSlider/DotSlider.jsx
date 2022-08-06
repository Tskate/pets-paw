import React from "react";
import Dot from "./Dot/Dot";
import style from './DotSlider.module.css'

function DotSlider({slides, slideNumber, choseSlide}) {

    const renderDots = () => {
        const dots = []
        for (let i = 0; i < slides.length; i++) {
            dots.push(<Dot
                key={`dot-${i}`}
                number={i}
                choseSlideNumber={slideNumber}
                choseSlide={choseSlide}
            />);
        }

        return dots
    };
    return(
        <div className={style.slider}>
            {renderDots()}
        </div>
    );
}

export default DotSlider;