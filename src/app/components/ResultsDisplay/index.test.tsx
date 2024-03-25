import React from 'react';
import renderer from 'react-test-renderer';
import ResultsDisplay from './index';
jest.mock('next/image', () => 'img');

describe('ResultsDisplay', () => {
  it('renders correctly when we have a list of valid cats in a clowder', () => {
    const props = {
      foundClowders: ['1ttg', '2wsb', '3brr'],
      invalidClowder: false,
      invalidClowderCause: [],
    };
    const component = renderer.create(<ResultsDisplay {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when a clowder is invalid', () => {
    const props = {
      foundClowders: [],
      invalidClowder: true,
      invalidClowderCause: ['eyes', 'shape'],
    };
    const component = renderer.create(<ResultsDisplay {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with empty clowder', () => {
    const props = {
      foundClowders: [],
      invalidClowder: false,
      invalidClowderCause: [],
    };
    const component = renderer.create(<ResultsDisplay {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
