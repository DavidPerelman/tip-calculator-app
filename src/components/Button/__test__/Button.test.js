import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('TipPercentsButtons', () => {
  test('renders correctly', async () => {
    render(<Button />);
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(1);
  });

  test('should clickHandler are called', () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
