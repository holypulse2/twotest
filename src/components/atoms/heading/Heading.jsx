import React from 'react';

const Heading = (props) => {

  return( 
      <h2 className="text-4xl leading-10 font-bold not-italic text-base sm:base normal-case pb-4"> {props.children} </h2>
  )
}

export default Heading;