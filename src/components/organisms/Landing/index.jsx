import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import LandingComponent from './LandingComponent';

const Landing = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration])

  const { landingPage } = configuration;
  if(!landingPage) return null;

  return(<LandingComponent data={configuration} />)
}

export default Landing;