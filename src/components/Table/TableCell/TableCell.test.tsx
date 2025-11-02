import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('renders TableCell', () => {
  render(<TableCell text="Cell Text" />);
  expect(screen.getByText('Cell Text')).toBeInTheDocument();
});
