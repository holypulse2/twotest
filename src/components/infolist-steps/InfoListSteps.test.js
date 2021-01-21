import React from 'react';
import { shallow } from 'enzyme';
import InfoListSteps from './InfoListSteps';
import chat from '../../assets/images/circle-chat.svg';

describe('InfoListSteps', () => {
  const data = { object: { heading: 'step', tick: {chat}, text: 'tick bullet testing' } }
  
  it('renders correctly', () => {
    const component = shallow(<InfoListSteps data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});