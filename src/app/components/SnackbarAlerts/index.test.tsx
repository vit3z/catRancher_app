import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SnackbarAlerts from './index';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Snackbar: jest.fn(({ open, autoHideDuration, onClose, children }) => (
    <div className={`mock-snackbar ${open ? 'open' : 'closed'}`}>
      {children}
    </div>
  )),
  Alert: jest.fn(({ onClose, severity, variant, className, children }) => (
    <div className={`mock-alert ${severity} ${variant} ${className}`}>
      {children}
    </div>
  )),
}));

describe('SnackbarAlerts', () => {
  it('renders correctly with error', () => {
    const props = {
      error: true,
      turnOffError: jest.fn(),
      errorContent: 'Sample error message',
      warning: false,
      turnOffWarning: jest.fn(),
      success: false,
      turnOffSuccess: jest.fn(),
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles onClose for error', () => {
    const turnOffErrorMock = jest.fn();
    const props = {
      error: true,
      turnOffError: turnOffErrorMock,
      errorContent: 'Sample error message',
      warning: false,
      turnOffWarning: jest.fn(),
      success: false,
      turnOffSuccess: jest.fn(),
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const instance = component.root;

    // Simulate closing of the error Snackbar
    instance.findByProps({ severity: 'error' }).props.onClose();

    // Verify if turnOffError was called with the correct arguments
    expect(turnOffErrorMock).toHaveBeenCalledWith(false);
  });

  it('renders correctly with warning', () => {
    const props = {
      error: false,
      turnOffError: jest.fn(),
      errorContent: '',
      warning: true,
      turnOffWarning: jest.fn(),
      success: false,
      turnOffSuccess: jest.fn(),
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles onClose for warning', () => {
    const turnOffWarningMock = jest.fn();
    const props = {
      error: false,
      turnOffError: jest.fn(),
      errorContent: '',
      warning: true,
      turnOffWarning: turnOffWarningMock,
      success: false,
      turnOffSuccess: jest.fn(),
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const instance = component.root;

    // Simulate closing of the warning Snackbar
    instance.findByProps({ severity: 'warning' }).props.onClose();

    // Verify if turnOffWarning was called with the correct arguments
    expect(turnOffWarningMock).toHaveBeenCalledWith(false);
  });

  it('renders correctly with success', () => {
    const props = {
      error: false,
      turnOffError: jest.fn(),
      errorContent: '',
      warning: false,
      turnOffWarning: jest.fn(),
      success: true,
      turnOffSuccess: jest.fn(),
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles onClose for success', () => {
    const turnOffSuccessMock = jest.fn();
    const props = {
      error: false,
      turnOffError: jest.fn(),
      errorContent: '',
      warning: false,
      turnOffWarning: jest.fn(),
      success: true,
      turnOffSuccess: turnOffSuccessMock,
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const instance = component.root;

    instance.findByProps({ severity: 'success' }).props.onClose();
    expect(turnOffSuccessMock).toHaveBeenCalledWith(false);
  });

  it('renders correctly with all types of alerts closed', () => {
    const props = {
      error: false,
      turnOffError: jest.fn(),
      errorContent: '',
      warning: false,
      turnOffWarning: jest.fn(),
      success: false,
      turnOffSuccess: jest.fn(),
    };
    const component = renderer.create(<SnackbarAlerts {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
