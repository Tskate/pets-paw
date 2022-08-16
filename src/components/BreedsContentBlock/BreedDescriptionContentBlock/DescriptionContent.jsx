import React, {useEffect, useState} from "react";
import style from "../BreedsContent.module.css";
import commonStyle from '../../CommonStyles/CommonPageStyles.module.css'
import ActionButton from "../../UI/Buttons/ActionButton/ActionButton";
import icon from "../../../images/icons/default/back.svg";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import BlockCharacteristicsBlock from "./BreedCharacteristicsBlock/BlockCharacteristicsBlock";
import Slides from "./Slides/Slides";
import {headerForJSON} from "../../../api/data";
import CommonPageHeader from "../../CommonPageHeader/CommonPageHeader";

function DescriptionContent({id}) {
    const [breed, setBreed] = useState()
    const [images, setImages] = useState()

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
                headers : headerForJSON
            })
            .then(res => res.json())
            .then(data => setBreed(data))
    },[])

    useEffect(() => {
        fetch( `https://api.thecatapi.com/v1/images/search?&breed_ids=${id}&limit=5`, {
            headers : headerForJSON
        })
            .then(res => res.json())
            .then(data => setImages(data.map(img => img.url)))
    },[])


    function isLoad() {
        if(breed && images) {
            return <div >
                <Slides images={images}/>
                <BlockCharacteristicsBlock
                breed={breed}
                />
            </div>
        }
    }

    return(
       <div className={commonStyle.content}>
           <div className={style.header}>
               <div className={style.leftPart}>
                   <CommonPageHeader title="BREEDS" isDefaultTitle={true}/>
                   <SectionTitle text={id} />
               </div>
           </div>
           {isLoad()}


       </div>
    );
}

export default DescriptionContent;