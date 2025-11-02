// importing test tools
import { render, screen } from '@testing-library/react';

// import button
import { Button } from './Button';

// visible test
test('Button is visible', () => {
  render(<Button text="Test Button" />);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});

// disabled test
test('Button background color changes when disabled', () => {
  render(<Button text="Disabled Button" disabled />);
  expect(screen.getByText('Disabled Button')).toHaveStyle(
    'background-color: grey'
  );
});
