/* eslint-disable import/prefer-default-export */

import checkPropTypes from 'check-prop-types';

export function findByAttr(component, attr) {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};
