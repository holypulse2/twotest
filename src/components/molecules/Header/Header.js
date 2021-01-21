import React from 'react';
import queryString from 'query-string';
import './index.scss';
import { useLocation, Link } from 'react-router-dom';
import logo from './../../../assets/images/logo.svg';
import { DEFAULT_LOCALE } from '../../../constants/index';
export default props => {

    
    const { search } = useLocation();
    let params = queryString.parse(search);

    const { locale } = params || {};

    const defaultUrl = locale ? locale : DEFAULT_LOCALE;

    return (
        <header className="header pt-12 sm:pt-6 md:pt-12 lg:pt-12 2xl:pt-12 3xl:pt-12 px-20 sm:px-10 md:px-20 xl:px-20 lg:px-20 2xl:px-20 3xl:px-20 4xl:px-20">
            <div className="header__container">
                <Link to={`/?locale=${defaultUrl}`}>
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
        </header>
    );    
}
  