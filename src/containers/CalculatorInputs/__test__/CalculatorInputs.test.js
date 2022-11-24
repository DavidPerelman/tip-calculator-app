import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('CalculatorInputs component', () => {
  test('test if the conatainer is in the page and have corect className', () => {
    render(<App />);

    const calculatorInputsContainer = screen.getByTestId('CalculatorInputs');

    expect(screen.getByTestId('CalculatorInputs')).toBeInTheDocument();
    expect(calculatorInputsContainer.firstChild).toHaveClass(
      'Container medium white'
    );
  });

  test('the bill input value should be 0', () => {
    render(<App />);

    const billInput = screen.getByTestId('billInput');

    expect(billInput.value).toBe('0');
  });
});
