import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rich Text Editor header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Rich Text Editor/i);
  expect(headerElement).toBeInTheDocument();
});
