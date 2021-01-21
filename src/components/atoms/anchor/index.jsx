import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnchorComponent from './Anchor';
import { ANCHOR_COMPONENT } from '../../../constants';

const Anchor = () => {
  const configuration = useSelector((state) => state.configuration);
  useEffect(() => {
  }, [configuration])

  const { landingPage } = configuration;
  if(!landingPage) return null;

  const data = landingPage.content.components.find(x => x.id === ANCHOR_COMPONENT);

  return(data && 
    <AnchorComponent data={data} />
  )
}

export default Anchor;