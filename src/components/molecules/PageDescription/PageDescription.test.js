import React from 'react';
import { shallow } from 'enzyme';
import PageDescription from './PageDescriptionComponent';

describe('PageDescription', () => {
  const data = { object: { heading: 'test heading', description: 'test description' } }
  
  it('renders correctly', () => {
    const component = shallow(<PageDescription data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});