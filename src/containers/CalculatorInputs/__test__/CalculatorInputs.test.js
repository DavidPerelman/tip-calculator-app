import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('CalculatorInputs component', () => {
  test('test if the conatainer is in the page and have corect className', async () => {
    render(<App />);

    const calculatorInputsContainer = screen.getByTestId('CalculatorInputs');

    expect(screen.getByTestId('CalculatorInputs')).toBeInTheDocument();
    expect(calculatorInputsContainer.firstChild).toHaveClass(
      'Container medium white'
    );
  });
});
