import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

test('renders Text component', () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('Text is greyed out when disabled', () => {
  render(<Text content="Disabled" disabled />);
  const element = screen.getByText('Disabled');
  expect(element).toHaveStyle('color: grey');
});
