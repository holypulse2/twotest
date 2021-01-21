import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import logo from './../../../assets/images/logo.svg';

describe('Header', () => {
  const data = { object: { logo: logo } }
  
  it('renders correctly', () => {
    const component = shallow(<Header data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});