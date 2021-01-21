import React, { useEffect } from 'react';
import {isIE} from 'react-device-detect';
import './index.scss';
import {API} from '../../constants';

const InfoItem =({step, index}) => {
  const { text, iconImage } = step || {};
  return(
    <div className="infoliststeps__item mb-4" key={ index}> 
    <div className="infoliststeps__circle">
    <div className="infoliststeps__image my-3">

    <img src={API+'/images/'+step['icon-image']} className="logo mx-auto" alt="logo" />
      </div>
    </div>
    <div className="infoliststeps__step text-center text-xl font-bold my-2 sm:mb-2">Step {index}</div>
    <div className="infoliststeps__stepText text-center ">{ text }</div>
    </div>
  )
}

const InfoListSteps = ({ data:componentData }) => {

  const { object } = componentData || {};

  const { heading, steps } = object || {};

  const classes = isIE ? 'ie-grid' :  'grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1';

  return(
    <div className="infoliststeps">
    <div className="infoliststeps__heading text-center font-bold md:text-3xl my-8"><h2>{ heading }</h2> </div> 
     
      <div className={`infoliststeps__content text-center ${ classes }`}>
        { (steps || []).map((step, index) => <InfoItem step={step} index={index+1} key={index} />)
        }
      </div>
    </div>
  )
}

export default InfoListSteps;