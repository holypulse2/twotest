import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text', () => {
  const data = { object: { description: 'stay up to date' } }
  
  it('renders correctly', () => {
    const component = shallow(<Text data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});