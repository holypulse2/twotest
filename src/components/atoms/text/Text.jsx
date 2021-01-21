import React from 'react';

const Text = (props) => {

  return(
      <p className="normal-case leading-snug sm:leading-snug"> {props.children} </p>
    )
}
    
export default Text;