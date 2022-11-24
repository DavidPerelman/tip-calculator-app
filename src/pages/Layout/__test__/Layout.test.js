import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('Layout component', () => {
  test('image contain "SPLITTER" alt', () => {
    render(<Layout />);
    const image = document.querySelector('img');
    expect(image.alt).toContain('SPLITTER');
  });
});
