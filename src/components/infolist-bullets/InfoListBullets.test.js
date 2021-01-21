import React from 'react';
import { shallow } from 'enzyme';
import InfoListBullets from './InfoListBullets';
import tick from '../../assets/images/tick.svg';

describe('InfoListBullets', () => {
  const data = { object: { heading: 'step', tick: {tick}, text: 'tick bullet testing' } }
  
  it('renders correctly', () => {
    const component = shallow(<InfoListBullets data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});