import { render, screen } from '@testing-library/react';
import App from './App';
import Layout from './pages/Layout/Layout';

test('renders the components', () => {
  render(<App />);
  render(<Layout />);
});
