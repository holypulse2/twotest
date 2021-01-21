import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InfoListStepsComponent from './InfoListSteps';
import { INFO_LIST_STEPS_COMPONENT } from '../../constants';

const InfoListSteps = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration]);

  if(!configuration.landingPage) return null;

  const data = configuration.landingPage.content.components.find(x => x.id === INFO_LIST_STEPS_COMPONENT);

  return(data && 
    <InfoListStepsComponent data={data} />
  )

}

export default InfoListSteps;