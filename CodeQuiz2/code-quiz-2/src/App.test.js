import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Checkbox is working correctly 1', () => {
  //disable button → button is gray → enable button → button is red
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ background: 'gray' })

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ background: 'red' })
});

test('Checkbox is working correctly 2', () => {
    //click button to change color → disable button → button is gray → enable button → button is blue
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(button);
  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ background: 'gray' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ background: 'blue' });
});