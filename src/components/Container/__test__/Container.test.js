import { render, screen } from '@testing-library/react';
import App from '../../../App';

describe('Layout component', () => {
  test('image contain "SPLITTER" alt', async () => {
    render(<App />);
  });
});
