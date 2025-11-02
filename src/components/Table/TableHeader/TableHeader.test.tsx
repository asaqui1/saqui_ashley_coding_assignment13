import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders TableHeader', () => {
  render(<TableHeader headers={[{ text: 'Name' }, { text: 'Age' }]} />);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Age')).toBeInTheDocument();
});
