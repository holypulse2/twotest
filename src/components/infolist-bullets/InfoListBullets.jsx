import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {isIE} from 'react-device-detect';
import {API} from '../../constants';
import './index.scss'; 
//import tick from "../../assets/images/tick.svg";


const BulletItem =({step, index}) => {
  const { text } = step || {};
  return(
    <div className="infolistbullets__item mb-4 pb-8" key={ index}> 
    <div className="infolistbullets__circle">
    <div className="infolistbullets__image my-3">

    <img src={API+'/images/'+step['icon-image']} className="logo mx-auto" alt="tick" />
      </div>
    </div>
    <div className="infolistbullets__bulletText text-center ">{text}</div>
    </div>
  )
}

const InfoListBullets = ({ data:componentData }) => {
  const { object } = componentData || {};

  const { heading, steps } = object || {};

  const classes = isIE ? 'ie-grid' :  'grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1';

  return(
    <div className="infolistbullets">
    <div className="infolistbullets__heading text-center font-bold my-8 pt-8 md:pt-10"><h2>{ heading }</h2> </div> 
    <div className={`infolistbullets__content text-center ${ classes }`}>
    { (steps || []).map((step, index) => <BulletItem step={step} index={index+1} key={index} />)
    }
    </div>
    </div>
  )
}

export default InfoListBullets;