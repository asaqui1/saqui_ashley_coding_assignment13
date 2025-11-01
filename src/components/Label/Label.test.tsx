import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

test('renders Label component', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});

test('Label is greyed out when disabled', () => {
  render(<Label text="Test Label" disabled />);
  const label = screen.getByText('Test Label');
  expect(label).toHaveStyle('color: grey');
});