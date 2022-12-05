import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../Input';

describe('TipPercentsButtons', () => {
  test('renders correctly', async () => {
    render(<Input label={'input'} />);
    const input = screen.getByLabelText('input');

    expect(input).toBeInTheDocument();
  });

  test('should clickHandler are called', () => {
    const ChangeHandler = jest.fn();
    render(<Input onChange={ChangeHandler} label={'input'} />);

    const input = screen.getByLabelText('input');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
    expect(ChangeHandler).toHaveBeenCalledTimes(1);
  });
});
