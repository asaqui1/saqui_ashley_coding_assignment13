import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

test('renders RadioButton component', () => {
  render(<RadioButton label="Test Option" />);
  expect(screen.getByLabelText('Test Option')).toBeInTheDocument();
});

test('RadioButton is greyed out when disabled', () => {
  render(<RadioButton label="Disabled Option" disabled />);
  const radio = screen.getByLabelText('Disabled Option');
  expect(radio).toBeDisabled();
});

test('calls onChange when clicked', () => {
  const handleChange = jest.fn();
  render(<RadioButton label="Clickable Option" onChange={handleChange} />);
  const radio = screen.getByLabelText('Clickable Option');
  fireEvent.click(radio);
  expect(handleChange).toHaveBeenCalledWith(true);
});
