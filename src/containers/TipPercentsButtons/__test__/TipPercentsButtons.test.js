import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';

describe('TipPercentsButtons', () => {
  test('renders correctly', async () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  test('should button-5-percent handlers are called', () => {
    render(<App />);

    const button = screen.getByTestId('button-5-percent');
    const buttons = screen.getAllByRole('button');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(tipPercentInput.value).toBe('');
    expect(button.className).toBe('Button small white active-button');

    buttons.forEach((button) => {
      if (button.className !== 'Button big active-button undefined') {
        if (button.value !== '5') {
          expect(button.className).toBe('Button small white non-active-button');
        }
      }
    });
  });

  test('should button-10-percent handlers are called', () => {
    render(<App />);

    const button = screen.getByTestId('button-10-percent');
    const buttons = screen.getAllByRole('button');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(tipPercentInput.value).toBe('');
    expect(button.className).toBe('Button small white active-button');

    buttons.forEach((button) => {
      if (button.className !== 'Button big active-button undefined') {
        if (button.value !== '10') {
          expect(button.className).toBe('Button small white non-active-button');
        }
      }
    });
  });

  test('should button-15-percent handlers are called', () => {
    render(<App />);

    const button = screen.getByTestId('button-15-percent');
    const buttons = screen.getAllByRole('button');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(tipPercentInput.value).toBe('');
    expect(button.className).toBe('Button small white active-button');

    buttons.forEach((button) => {
      if (button.className !== 'Button big active-button undefined') {
        if (button.value !== '15') {
          expect(button.className).toBe('Button small white non-active-button');
        }
      }
    });
  });

  test('should button-25-percent handlers are called', () => {
    render(<App />);

    const button = screen.getByTestId('button-25-percent');
    const buttons = screen.getAllByRole('button');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(tipPercentInput.value).toBe('');
    expect(button.className).toBe('Button small white active-button');

    buttons.forEach((button) => {
      if (button.className !== 'Button big active-button undefined') {
        if (button.value !== '25') {
          expect(button.className).toBe('Button small white non-active-button');
        }
      }
    });
  });

  test('should button-50-percent handlers are called', async () => {
    render(<App />);

    const button = screen.getByTestId('button-50-percent');
    const buttons = screen.getAllByRole('button');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(tipPercentInput.value).toBe('');
    expect(button.className).toBe('Button small white active-button');

    buttons.forEach((button) => {
      if (button.className !== 'Button big active-button undefined') {
        if (button.value !== '50') {
          expect(button.className).toBe('Button small white non-active-button');
        }
      }
    });
  });
});
