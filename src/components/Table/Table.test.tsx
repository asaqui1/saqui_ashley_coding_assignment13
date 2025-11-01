import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

test('renders Table component', () => {
  render(
    <Table
      headers={[{ text: 'Name' }]}
      rows={[[{ text: 'Alice' }]]}
    />
  );
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Alice')).toBeInTheDocument();
});