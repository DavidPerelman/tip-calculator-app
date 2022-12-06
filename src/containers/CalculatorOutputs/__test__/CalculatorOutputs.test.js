import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('CalculatorOutputs component', () => {
  test('renders correctly', () => {
    render(<App />);

    const tipAmountSpan = screen.getByText(/tip amount/i);
    const totalSpan = screen.getByText(/total/i);

    expect(tipAmountSpan).toBeInTheDocument();
    expect(totalSpan).toBeInTheDocument();
  });

  test('the tip amount output value should be 0', () => {
    render(<App />);

    const tipAmountOutput = screen.getByTestId('tipAmountOutput');
    expect(tipAmountOutput.innerHTML).toBe('$0.00');
  });
});
