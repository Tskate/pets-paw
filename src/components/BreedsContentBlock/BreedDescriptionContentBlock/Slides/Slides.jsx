import React, {useState} from "react";
import style from './Slides.module.css'
import DotSlider from "../../../UI/DotSlider/DotSlider";

function Slides({images}) {
    const [slideNumber, setSlideNumber] = useState(0);
    const [translate, setTranslate] = useState(0)


    function showSlide(curNumb, newNumb) {
        return (newNumb - curNumb) * -100
    }

    function goToSlide(number) {
        setTranslate((number * -100))
        setSlideNumber(number)
    }

    return(
        <div className={style.content}>
            <div className={style.imgsWrapper}>
                <div className={style.slideList} style={{transform: `translate(${translate}%)`}}>
                    {images.map((img, index) => <img key={index} number={index} src={img}/>)}
                </div>
            </div>
            <div className={style.sliderContainer} >
                <DotSlider
                    slides={images}
                    slideNumber={slideNumber}
                    choseSlide={goToSlide}
                />
            </div>
        </div>
    )
}

export default Slides;