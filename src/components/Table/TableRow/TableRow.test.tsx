import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders TableRow', () => {
  render(<TableRow cells={[{ text: 'Ashley' }, { text: '25' }]} />);
  expect(screen.getByText('Ashley')).toBeInTheDocument();
  expect(screen.getByText('25')).toBeInTheDocument();
});
