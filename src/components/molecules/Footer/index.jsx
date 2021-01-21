import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FooterComponent from './Footer';
import { FOOTER_COMPONENT } from '../../../constants';

const Footer = () => {
    const configuration = useSelector((state) => state.configuration);
  
    useEffect(() => {
    }, [configuration]);
  
    if(!configuration.content) return null;

    let footerLinks = [];
    configuration.content.content.labels.sections.forEach((key, value)=>{
        const { name, translations }  = key  || {};
        if(name  === "clickables") {
            footerLinks.push(translations);
        }
    }
    );
    
    const allowedLinks = ['privacy', 'cookies', 'terms'];

    const footerAllowedLinks = (footerLinks[0] || []).filter((e) => allowedLinks.indexOf(e.name) !== -1);

    return( 
        <FooterComponent data={footerAllowedLinks} />
      )
    
    
    
  }
  
  export default Footer;