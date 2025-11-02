import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders TableFooter', () => {
  render(<TableFooter footer={{ text: 'Footer Text' }} />);
  expect(screen.getByText('Footer Text')).toBeInTheDocument();
});
