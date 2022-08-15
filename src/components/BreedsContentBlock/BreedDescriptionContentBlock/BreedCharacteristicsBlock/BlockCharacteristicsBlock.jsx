import React from "react";
import style from './BreedCharacteristicsBlock.module.css'

function BlockCharacteristicsBlock({breed}) {
    return(
        <fieldset className={style.wrapper}>
            <legend className={style.name}>
                {breed.name}
            </legend>
            <p className={style.shortDescription}>
                {breed.description}
            </p>
            <div className={style.characteristics}>
                <div className={style.temp}>
                    <p className={style.prop}>Temperament:</p>
                    <p className={style.value}> {breed.temperament} </p>
                </div>
                <div>
                    <p className={style.prop}>
                        Origin: <span className={style.value}>
                            {breed.origin}
                        </span>
                    </p>
                    <p className={style.prop}>
                        Weight: <span className={style.value}>
                            {breed.weight.imperial + " kg"}
                        </span>
                    </p>
                    <p className={style.prop}>
                        Life span: <span className={style.value}>
                            {breed.life_span}
                        </span>
                    </p>
                </div>
            </div>
        </fieldset>

    );
}

export default BlockCharacteristicsBlock;