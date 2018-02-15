import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Lanbutton from '../../../src/components/button/LanButton';

describe('rendering', () => {
  let wrapper;
  const onPress = sinon.spy();

  beforeEach(() => {
    wrapper = shallow(<Lanbutton title="jest test" onPress={onPress} />);
  });

  it('should render a <Button/>', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('simulates press events', () => {
    wrapper.find('Button').simulate('press');
    expect(onPress).toHaveProperty('callCount', 1);
  });
});
