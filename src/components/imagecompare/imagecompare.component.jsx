import React from 'react'
import { ImgComparisonSlider } from '@img-comparison-slider/react';

import  comp1 from '../../assets/comp1.jpg'
import comp2 from '../../assets/comp2.jpg'
import arrows from '../../assets/arrows.png'
import './imagecompare.styles.css'

const  ImgComare = () => {
            return (
            <ImgComparisonSlider class="slider-with-custom-handle">
            <img slot="before" width="100%" src={comp2}></img>
            <img slot="after" width="100%" src={comp1}></img>
            <img slot="handle" class="custom-handle" src={arrows}></img>
            </ImgComparisonSlider>
            )
}
export default ImgComare;