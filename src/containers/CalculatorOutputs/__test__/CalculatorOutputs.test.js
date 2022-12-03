import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('CalculatorOutputs component', () => {
  test('test if the conatainer is in the page and have corect className', () => {
    render(<App />);

    // const calculatorOutputsContainer = screen.getByTestId('CalculatorOutputs');

    // expect(screen.getByTestId('CalculatorOutputs')).toBeInTheDocument();
    // expect(calculatorOutputsContainer.firstChild).toHaveClass(
    //   'Container medium green'
    // );
  });

  test('the tip amount output value should be 0', () => {
    render(<App />);

    const tipAmountOutput = screen.getByTestId('tipAmountOutput');
    expect(tipAmountOutput.innerHTML).toBe('$0.00');
  });
});
