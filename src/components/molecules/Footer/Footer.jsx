import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss'
import FooterComponent from './index';
import { Fragment } from 'react';

const Footer = ({data}) => {
  return( 

    <Fragment>
        { (data || []). length > 0 ? <footer className="mx-auto">
        <div className="py-3 flex md:flex md:items-center md:justify-center " >
        <ul className="w-full text-center">
            {  
                (data || []).map((e, i) => {
                    const { name, text } = e || {};
                    const classes = ((data || []).length === i+1) ? "border-0" : "border-r";
                    return (
                       <li className={`px-4 sm:px-3 ${classes} capitalize inline leading-7 text-sm`} key={ i }><a className="text-sm font-poppins" href={ name }>{ text }</a></li>
                    )
                })
            }
            </ul>
        </div>
    </footer> : "" }
    </Fragment>
)
}

export default Footer;