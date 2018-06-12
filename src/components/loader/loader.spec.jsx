import { shallow } from 'enzyme';
import React from 'react';
import { Loader } from './';

describe('Image component', () => {
  it('snapshot matches', () => {
    const wrapper = shallow(
      <Loader>Lorem ipsum...</Loader>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
