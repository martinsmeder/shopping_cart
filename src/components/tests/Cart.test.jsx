import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';

it('renders cart with correct items and total', () => {
  const cartItems = [
    { id: 1, name: 'Item 1', amount: 2, price: 10 },
    { id: 2, name: 'Item 2', amount: 1, price: 5 },
  ];
  const sumTotal = 25;

  render(
    <MemoryRouter>
      <Cart cartItems={cartItems} sumTotal={sumTotal} />
    </MemoryRouter>
  );

  // Check if the rendered content matches the expected values
  const item1 = screen.getByText('2 x Item 1: 10$');
  const item2 = screen.getByText('1 x Item 2: 5$');
  const total = screen.getByText('Total: 25$');

  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
  expect(total).toBeInTheDocument();
});
