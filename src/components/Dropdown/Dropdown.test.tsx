import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

test('renders Dropdown component', () => {
  render(<Dropdown options={['One', 'Two']} />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('Dropdown is greyed out when disabled', () => {
  render(<Dropdown options={['One', 'Two']} disabled />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveStyle('background-color: grey');
});

test('calls onChange when selecting option', () => {
  const handleChange = jest.fn();
  render(<Dropdown options={['One', 'Two']} onChange={handleChange} />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Two' } });
  expect(handleChange).toHaveBeenCalledWith('Two');
});