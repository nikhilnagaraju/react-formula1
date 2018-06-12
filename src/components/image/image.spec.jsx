import { shallow } from 'enzyme';
import React from 'react';
import { Image } from './';

describe('Image component', () => {
  it('snapshot matches', () => {
    const wrapper = shallow(
      <Image src="test/image.png" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
