import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('CalculatorOutputs component', () => {
  test('test if the conatainer is in the page and have corect className', async () => {
    render(<App />);

    const greenContainer = screen.getByTestId('CalculatorOutputs');

    expect(screen.getByTestId('CalculatorOutputs')).toBeInTheDocument();
    expect(greenContainer.firstChild).toHaveClass('Container medium green');
  });
});
