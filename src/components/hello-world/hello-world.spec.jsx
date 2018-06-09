import { shallow } from 'enzyme';
import React from 'react';
import HelloWorld from 'components/hello-world/hello-world';

describe('Hello World', () => {
  it('contains text', () => {
    const wrapper = shallow(
      <HelloWorld>
        <pre>Lorem ipsum</pre>
      </HelloWorld>,
    );

    expect(wrapper.find('pre').text()).toEqual('Lorem ipsum');
  });
});
