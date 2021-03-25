import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Draft select option', () => {
  render(<App />);
  const formNameElement = screen.getByText(/Draft/i);
  expect(formNameElement).toBeInTheDocument();
});
