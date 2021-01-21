import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HERO_COMPONENT, PAGE_DESCRIPTION_COMPONENT, INFO_LIST_STEPS_COMPONENT, INFO_LIST_TICK_BULLETS_COMPONENT, ANCHOR_COMPONENT, FOOTER_COMPONENT } from '../../../constants';
import Hero from '../../molecules/Hero';
import InfoListSteps from '../../infolist-steps';
import InfoListBullets from '../../infolist-bullets';
import Anchor from '../../atoms/anchor';

const LandingComponent = ({ data }) => {
  const landingComponents = [];

  data.landingPage.content.components.forEach(component => {
      if(component.id === HERO_COMPONENT) landingComponents.push(<Hero />);
      if(component.id === INFO_LIST_STEPS_COMPONENT) landingComponents.push(<InfoListSteps />);
      if(component.id === INFO_LIST_TICK_BULLETS_COMPONENT) landingComponents.push(<InfoListBullets />);
      if(component.id === ANCHOR_COMPONENT) landingComponents.push(<Anchor />);
  });

  return(
    <>
      {landingComponents.map((component, index) => (
        <div key={index}> {component}</div>
      ))}
    </>
  )
}

export default LandingComponent;