import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';



const MainCrousel = () => {
    const items = mainCarouselData.map((item,index)=> <img role='presentation' className='cursor-pointer' src={item.image}  />)
    return(
        <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate" />
    )
}

export default MainCrousel