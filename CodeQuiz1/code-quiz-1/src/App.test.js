import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

test('The checkbox works', () => {
  const { container } = render(<App />);
  logRoles(container);
  const button = screen.getByRole('button');
  const checkBox = screen.getByLabelText('Disable button');

  fireEvent.click(checkBox);

  expect(button).toBeDisabled();

  fireEvent.click(checkBox);

  expect(button).toBeEnabled();
});
