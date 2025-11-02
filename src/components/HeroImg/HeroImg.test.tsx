import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImg } from './HeroImg';

test('renders HeroImg component', () => {
  render(
    <HeroImg
      src="https://images.unsplash.com/photo-1717603545758-88cc454db69b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
      alt="Test Hero"
    />
  );
  expect(screen.getByAltText('Test Hero')).toBeInTheDocument();
});

test('HeroImg is semi-transparent when disabled', () => {
  render(
    <HeroImg
      src="https://images.unsplash.com/photo-1717603545758-88cc454db69b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
      alt="Test Hero"
      disabled
    />
  );
  const img = screen.getByAltText('Test Hero');
  expect(img).toHaveStyle('opacity: 0.5');
});
