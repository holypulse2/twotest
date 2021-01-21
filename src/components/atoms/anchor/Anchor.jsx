import React from 'react';
import './index.scss';

const Anchor = ({data}) => {

  return (data &&
    <div className='cta-div text-center'>
        <a className='place-content-center capitalize mt-10 text-center mb-10 bg-primary-900  hover:bg-opacity-75 transition-colors duration-200 rounded-full font-semibold py-4 px-12 inline-flex cta' href={ data.object.link }>
            {data.object.text}
            {(data.object.iconImage && data.object.iconImage !== '') && 
                <img className='w-5 ml-2' src={data.object.iconImage} alt={data.object.text}></img>
            }
        </a>
    </div>
  )
}

export default Anchor;