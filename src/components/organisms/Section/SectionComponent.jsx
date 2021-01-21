import React from 'react';
import './index.scss'
import Heading from "../../atoms/heading/Heading";
import { API } from '../../../constants';

const SectionComponent = ({ data }) => {
  const imageSrc = API + '/images/' + data.image;
  return( data &&
    <div className="text-center ">
      <div className="section__title text-sm font-medium">Section {data.pageNumber} </div>
      <Heading> {data.name} </Heading>
      <div className="mx-auto max-w-3xl md:max-w-3xl lg:max-w-3xl 2xl:max-w-3xl 3xl:max-w-3xl md:mx-auto lg:mx-auto 2xl:mx-auto 3xl:mx-auto px-8"><img className='text-center mx-auto' src={ imageSrc } alt={ 'section-image' }/></div>
    </div>
  )
}

export default SectionComponent;