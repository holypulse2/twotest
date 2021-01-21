import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Anchor', () => {
  const data = { object: { Desktop: '../../assets/images/hero-image.png', Mobile: '../../assets/images/hero-image.png' } }
  
  it('renders correctly', () => {
    const component = shallow(<Hero data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});