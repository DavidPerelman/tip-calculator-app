import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('Layout component', () => {
  test('image contain "SPLITTER" alt', async () => {
    render(<App />);

    const whiteContainer = await screen.findAllByText(/bill/i);
    expect(whiteContainer[0]).toHaveClass('Container medium white');

    const greenContainer = await screen.findAllByText(/Tip Amount/i);
    expect(greenContainer[0]).toHaveClass('Container medium green');
  });
});
