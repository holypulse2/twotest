import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import HeroComponent from './Hero';
import { HERO_COMPONENT } from '../../../constants';

const Hero = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration])

  const { landingPage } = configuration;
  if(!landingPage) return null;

  const data = landingPage.content.components.find(x => x.id === HERO_COMPONENT);

  return(data && 
    <HeroComponent data={data} />
  )
}

export default Hero;