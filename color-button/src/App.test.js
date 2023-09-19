import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  const { container } = render(<App />);
  // Provide a console log of the Component
  logRoles(container);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button has correct initial text', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  expect(colorButton).toHaveTextContent('Change to blue');
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

test('button changes text when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveTextContent('Change to red');
});

test('Initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');

  expect(checkBox).not.toBeChecked();
})
