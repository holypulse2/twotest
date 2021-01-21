import React from 'react';
import './index.scss'
import Heading from "../../atoms/heading/Heading";
import Text from "../../atoms/text/Text";

const PageDescriptionComponent = ({data}) => {

  return( data &&
    <div>
      <Heading> {data.object.heading} </Heading>
      <Text> {data.object.description} </Text>
    </div>
  )
}

export default PageDescriptionComponent;