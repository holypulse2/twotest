import React from 'react';
import { useSelector } from 'react-redux';
import PageDescriptionComponent from './SectionComponent';
import { PAGE_DESCRIPTION_COMPONENT } from '../../../constants';

const PageDescription = () => {
  const pageNumer
  const configuration = useSelector((state) => state.configuration);

  useEffect(() => {
  }, [configuration])

  const { survey } = configuration;
  if(!survey) return null;

  const data = configuration.content.sections.forEach(element => {
    
  });

  return(data && 
    <PageDescriptionComponent data={data} />
  )
}

export default PageDescription;