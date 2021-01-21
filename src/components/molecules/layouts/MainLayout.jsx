import React from 'react'
import Header from '../../molecules/Header/Header';

import Footer from '../../molecules/Footer';

import {Helmet} from "react-helmet";
 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gilead Survey</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />  
            </Helmet>
        </div>
    );
  }
};

export default ({ children }) => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Application />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

