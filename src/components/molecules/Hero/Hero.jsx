import React from 'react';

import Desktop from "../../../assets/images/hero-image.png";
import Mobile from "../../../assets/images/mobile-header.png";
import Heading from "../../atoms/heading/Heading";
import Text from "../../atoms/text/Text";
import './Hero.scss';
import PageDescription from "../PageDescription";

const Hero = ({data}) => {   

  return (data &&
    <div className='mx-auto h-full flex sm:flex-wrap 2xl:align-middle 2xl:items-center hero px-20 sm:pb-0 md:pb-8 lg:pb-8  sm:px-5'>
        <div className='2xl:w-1/2 lg:w-1/2 md:w-full sm:w-full  text-left pt-12 pb-24 4xl:pb-0 sm:pb-0 order-1 sm:order-last sm:mt-1 sm:px-6 sm:pt-6 sm:pb-10 md:pb-10 md:px-4 hero__content 4xl:flex 4xl:items-center '>
          <div>
            <PageDescription />
          </div>
        </div>

        <div className="4xl:w-full sm:w-full lg:w-1/2 lg:py-6 md:w-full items-end text-center order-2 sm:order-1 sm:h-auto sm:pb-0 hero">
          <picture>
            <source media="(min-width:768px)" srcSet={ Desktop }/>
            <source media="(min-width:767px)" srcSet={ Mobile }/>
            <img src={ Desktop } alt="Hero Img"/>
          </picture>
        </div>
        
    </div>
  )
}

export default Hero;