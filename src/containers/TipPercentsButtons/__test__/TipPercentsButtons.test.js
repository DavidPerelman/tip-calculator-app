import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';
import TipPercentsButtons from '../TipPercentsButtons';

const clickHandler = jest.fn(() => {
  const tipPercentInput = screen.getByTestId('tipPercentInput');
  tipPercentInput.value = '';
});

describe('TipPercentsButtons', () => {
  test('renders correctly', async () => {
    render(<TipPercentsButtons />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  test('should button-5-percent handlers are called', () => {
    render(<TipPercentsButtons buttonClick={clickHandler} />);

    const button = screen.getByTestId('button-5-percent');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(tipPercentInput.value).toBe('');
  });

  test('should button-10-percent handlers are called', () => {
    render(<TipPercentsButtons buttonClick={clickHandler} />);

    const button = screen.getByTestId('button-10-percent');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(tipPercentInput.value).toBe('');
  });

  test('should button-15-percent handlers are called', () => {
    render(<TipPercentsButtons buttonClick={clickHandler} />);

    const button = screen.getByTestId('button-15-percent');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(tipPercentInput.value).toBe('');
  });

  test('should button-25-percent handlers are called', () => {
    render(<TipPercentsButtons buttonClick={clickHandler} />);

    const button = screen.getByTestId('button-25-percent');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(tipPercentInput.value).toBe('');
  });

  test('should button-50-percent handlers are called', async () => {
    render(<TipPercentsButtons buttonClick={clickHandler} />);

    const button = screen.getByTestId('button-50-percent');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(tipPercentInput.value).toBe('');
  });
});
