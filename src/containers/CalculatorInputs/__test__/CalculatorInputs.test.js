import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../App';

describe('CalculatorInputs component', () => {
  test('test if the conatainer is in the page and have corect className', () => {
    render(<App />);

    const calculatorInputsContainer = screen.getByTestId('CalculatorInputs');

    expect(screen.getByTestId('CalculatorInputs')).toBeInTheDocument();
    expect(calculatorInputsContainer.firstChild).toHaveClass(
      'Container medium none'
    );
  });

  test('the bill input value should be 0', () => {
    render(<App />);

    const billInput = screen.getByTestId('billInput');
    expect(billInput.value).toBe('');
  });

  test('on change the bill input the value should be 12345', () => {
    render(<App />);

    const billInput = screen.getByTestId('billInput');

    fireEvent.change(billInput, { target: { value: '12345' } });
    expect(billInput.value).toBe('12345');
  });
});
