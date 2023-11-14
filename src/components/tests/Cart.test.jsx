import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';

it('renders cart with correct items and total', () => {
  const cartItems = [
    { id: 1, name: 'First Item ', amount: 2, price: 10 },
    { id: 2, name: 'Second Item ', amount: 1, price: 5 },
  ];
  const sumTotal = 25;

  render(
    <MemoryRouter>
      <Cart cartItems={cartItems} sumTotal={sumTotal} />
    </MemoryRouter>
  );

  // Check if the rendered content matches the expected values
  const nameAndAmount1 = screen.getByText('First Item x 2');
  const price1 = screen.getByText('10.00$');
  expect(nameAndAmount1).toBeInTheDocument();
  expect(price1).toBeInTheDocument();

  const nameAndAmount2 = screen.getByText('Second Item x 1');
  const price2 = screen.getByText('5.00$');
  expect(nameAndAmount2).toBeInTheDocument();
  expect(price2).toBeInTheDocument();

  const total = screen.getByText('25.00$');
  expect(total).toBeInTheDocument();
});
