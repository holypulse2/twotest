import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  const data = { object: { name: 'a.privacy', text: 'privacy' } }
  
  it('renders correctly', () => {
    const component = shallow(<Footer data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});