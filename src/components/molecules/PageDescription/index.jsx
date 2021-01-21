import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageDescriptionComponent from './PageDescriptionComponent';
import { PAGE_DESCRIPTION_COMPONENT } from '../../../constants';

const PageDescription = () => {
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration]);

  if(!configuration.landingPage) return null;

  const data = configuration.landingPage.content.components.find(x => x.id === PAGE_DESCRIPTION_COMPONENT);

  return(data && 
    <PageDescriptionComponent data={data} />
  )

}

export default PageDescription;