import React from 'react';
import renderer from 'react-test-renderer';
import CatDisplay from './index';

jest.mock('next/image', () => 'img');
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Typography: jest.fn(({ variant, children }) => (
    <div className={`mock-typography ${variant}`}>{children}</div>
  )),
}));

describe('CatDisplay', () => {
  it('renders correctly', () => {
    const props = {
      cat: '1ttg',
      catHeight: 100,
      catWidth: 100,
      addCatToTentativeClowder: jest.fn(),
    };
    const component = renderer.create(<CatDisplay {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
