import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InfoListBulletsComponent from './InfoListBullets';
import { INFO_LIST_TICK_BULLETS_COMPONENT } from '../../constants';

const InfoListBullets = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration]);

  if(!configuration.landingPage) return null;

  const data = configuration.landingPage.content.components.find(x => x.id === INFO_LIST_TICK_BULLETS_COMPONENT);

  return(data && 
    <InfoListBulletsComponent data={data} />
  )

}

export default InfoListBullets;