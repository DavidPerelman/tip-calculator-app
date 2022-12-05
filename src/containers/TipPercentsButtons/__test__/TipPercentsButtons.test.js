import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TipPercentsButtons from '../TipPercentsButtons';
import App from '../../../App';

// const clickHandler = jest.fn(() => {
//   const tipPercentInput = screen.getByTestId('tipPercentInput');
//   tipPercentInput.value = '';
// });

describe('TipPercentsButtons', () => {
  test('renders correctly', async () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  test('should button-5-percent handlers are called', () => {
    render(<App />);

    const button = screen.getByTestId('button-5-percent');
    const tipPercentInput = screen.getByTestId('tipPercentInput');
    userEvent.click(button);
    // expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(tipPercentInput.value).toBe('');
  });

  // test('should button-10-percent handlers are called', () => {
  //   render(<TipPercentsButtons buttonClick={clickHandler} />);

  //   const color = 'rgb(159, 232, 223)';

  //   const button = screen.getByTestId('button-10-percent');
  //   const tipPercentInput = screen.getByTestId('tipPercentInput');
  //   userEvent.click(button);
  //   console.log(button);
  //   expect(clickHandler).toHaveBeenCalledTimes(1);
  //   expect(tipPercentInput.value).toBe('');
  // });

  // test('should button-15-percent handlers are called', () => {
  //   render(<TipPercentsButtons buttonClick={clickHandler} />);

  //   const button = screen.getByTestId('button-15-percent');
  //   const tipPercentInput = screen.getByTestId('tipPercentInput');
  //   userEvent.click(button);
  //   expect(clickHandler).toHaveBeenCalledTimes(1);
  //   expect(tipPercentInput.value).toBe('');
  // });

  // test('should button-25-percent handlers are called', () => {
  //   render(<TipPercentsButtons buttonClick={clickHandler} />);

  //   const button = screen.getByTestId('button-25-percent');
  //   const tipPercentInput = screen.getByTestId('tipPercentInput');
  //   userEvent.click(button);
  //   expect(clickHandler).toHaveBeenCalledTimes(1);
  //   expect(tipPercentInput.value).toBe('');
  // });

  // test('should button-50-percent handlers are called', async () => {
  //   render(<TipPercentsButtons buttonClick={clickHandler} />);

  //   const button = screen.getByTestId('button-50-percent');
  //   const tipPercentInput = screen.getByTestId('tipPercentInput');
  //   userEvent.click(button);
  //   expect(clickHandler).toHaveBeenCalledTimes(1);
  //   expect(tipPercentInput.value).toBe('');
  // });
});
