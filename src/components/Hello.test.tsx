import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Hello } from './Hello';

it('renders correctly', () => {
  const props = {
    compiler: 'TypeScript',
    framework: 'React',
  };
  const tree = renderer.create(<Hello {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
