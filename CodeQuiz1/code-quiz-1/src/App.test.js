import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('The checkbox works', () => {
  render(<App />);
  const button = screen.getByRole('button');
  const checkBox = screen.getByRole('checkbox');

  fireEvent.click(checkBox);

  expect(button).toBeDisabled();

  fireEvent.click(checkBox);

  expect(button).toBeEnabled();
});
