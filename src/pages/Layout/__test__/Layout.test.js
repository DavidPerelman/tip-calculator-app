import { render } from '@testing-library/react';
import Container from '../../../components/Container/Container';
import Layout from '../Layout';

describe('Layout component', () => {
  test('image contain "SPLITTER" alt', () => {
    render(<Layout />);
    const image = document.querySelector('img');
    expect(image.alt).toContain('SPLITTER');
  });

  test('image contain "SPLITTER" alt', () => {
    render(<Container />);
  });
});
