import { render, screen } from '@testing-library/react';
import Router from './Router';

test('...', () => {
  render(<Router />);

  const inputNode1 = screen.getByText(
    'Your Premier Crypto Simulation Platform'
  );

  expect(inputNode1).toBeInTheDocument();
});
