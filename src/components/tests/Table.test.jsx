import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Table from '../Table';
import testArray from '../testData';

it('renders table with correct data', () => {
  render(
    <MemoryRouter>
      <Table data={testArray} />
    </MemoryRouter>
  );

  // Check if the Table component renders the correct amount of items
  const rows = screen.getAllByRole('row');
  expect(rows.length).toBe(testArray.length + 1); // +1 for the header row

  // Iterate over the testArray and check if each item's name and price are
  // present in the rendered content
  testArray.forEach((item) => {
    const nameCell = screen.getByText(
      item.name.charAt(0).toUpperCase() + item.name.slice(1)
    );
    const priceCell = screen.getByText(`${item.price}$`);

    expect(nameCell).toBeInTheDocument();
    expect(priceCell).toBeInTheDocument();
  });
});
