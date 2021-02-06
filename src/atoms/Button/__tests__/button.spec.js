import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';

function findByAttr(component, attr) {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

describe('button', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      title: 'test button',
    };
    wrapper = shallow(<Button {...props} />);
  });

  it('renders without an issue', () => {
    const button = findByAttr(wrapper, 'button-component');
    expect(button.length).toBe(1);
  });
});
