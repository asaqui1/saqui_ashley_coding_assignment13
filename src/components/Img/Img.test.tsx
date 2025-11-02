import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

test('renders Img component', () => {
  render(
    <Img
      src="https://images.unsplash.com/photo-1639398483621-ae27706deb65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
      alt="Test Img"
    />
  );
  expect(screen.getByAltText('Test Img')).toBeInTheDocument();
});

test('Img is semi-transparent when disabled', () => {
  render(
    <Img
      src="https://images.unsplash.com/photo-1639398483621-ae27706deb65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
      alt="Test Img"
      disabled
    />
  );
  const img = screen.getByAltText('Test Img');
  expect(img).toHaveStyle('opacity: 0.5');
});
