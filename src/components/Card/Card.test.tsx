import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

test('renders Card component', () => {
  render(<Card title="Test Card" description="This is a test" />);
  expect(screen.getByText('Test Card')).toBeInTheDocument();
});

test('Card background changes when prop is set', () => {
  render(<Card title="Test" description="Desc" backgroundColor="red" />);
  const card = screen.getByText('Test').parentElement;
  expect(card).toHaveStyle('background-color: red');
});