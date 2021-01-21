import React from 'react';
import { shallow } from 'enzyme';
import Anchor from './Anchor';

describe('Anchor', () => {
  const data = { object: { text: 'download', link: 'http://www.google.com' } }
  
  it('renders correctly', () => {
    const component = shallow(<Anchor data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});