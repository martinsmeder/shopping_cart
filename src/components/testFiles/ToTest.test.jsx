import { render, screen } from '@testing-library/react';
import ToTest from './ToTest';

test('...', () => {
  render(<ToTest />);

  const inputNode1 = screen.getByText('TEST ME');

  expect(inputNode1).toBeInTheDocument();
});
