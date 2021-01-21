import React from 'react';
import { shallow } from 'enzyme';
import SectionComponent from './SectionComponent';

describe('SectionComponent', () => {
  const data = { pageNumber: 1, heading: 'heading', image: 'src' }
  
  it('renders correctly', () => {
    const component = shallow(<SectionComponent data={data} />);
  
    expect(component).toMatchSnapshot();
  });
});