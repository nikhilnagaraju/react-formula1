import { shallow } from 'enzyme';
import React from 'react';
import { FlashMessage } from 'components/flash-message/flash-message';

describe('FlashMessage component', () => {
  it('snapshot matches', () => {
    const wrapper = shallow(
      <FlashMessage>Lorem ipsum...</FlashMessage>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
