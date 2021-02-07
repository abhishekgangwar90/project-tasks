import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';
import { checkProps, findByAttr } from '../../../utils/testUtils';

describe('button', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      title: 'test button',
      animated: true,
    };
    wrapper = shallow(<Button {...props} />);
  });

  it('renders without an issue', () => {
    const button = findByAttr(wrapper, 'button-component');
    expect(button.length).toBe(1);
  });

  it('render the title correctly', () => {
    const button = findByAttr(wrapper, 'button-component');
    expect(button.text()).toBe('test button');
  });

  it('fails when passed a color except white and green', () => {
    const invalidProps = {
      color: 'yellow',
    };
    const propsError = checkProps(Button, invalidProps);
    expect(propsError).toBeTruthy();
  });

  // it('enables animation', () => {
  //   const button = findByAttr(wrapper, 'button-component');
  //   expect(button).toHaveClass('btn--animated')
  // });
});
