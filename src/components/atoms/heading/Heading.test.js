import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

describe('Heading', () => {
  const data = { object: { heading: 'gilead' } }
  
  it('renders correctly', () => {
    const component = shallow(<Heading data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});