import React from "react";
import styles from './ImageBox.module.css'

function ImageBox({background, img}) {
    return (
        <div
            className={styles.imgBox}
            style={
                    {background: background,}}>
            <img src={img} alt="option image"/>
        </div>
    )
}

export default ImageBox;