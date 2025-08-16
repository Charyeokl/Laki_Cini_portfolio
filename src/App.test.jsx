import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Basic Information heading', () => {
  render(<App />);
  expect(screen.getByText(/Basic Information/i)).toBeInTheDocument();
});
