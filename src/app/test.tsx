import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App, { HEADER_CLASS } from '.';

let wrapper: ShallowWrapper;

describe('App', () => {
  it('should render the header', () => {
    wrapper = shallow(<App />);

    expect(wrapper.find(`.${HEADER_CLASS}`)).toHaveLength(1);
  });
});
