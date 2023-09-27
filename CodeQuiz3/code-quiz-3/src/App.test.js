import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Button works correctly', () => {
  test('Initial state', () => {
    render(<App/>);

    const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

    expect(button).toHaveStyle({ background: 'MediumVioletRed'});
    expect(button).toHaveTextContent('Change to MidnightBlue');
  });
  test('Button changes the color', () => {
    render(<App />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveStyle({ background: 'MidnightBlue' });

    fireEvent.click(button);

    expect(button).toHaveStyle({ background: 'MediumVioletRed' });
  });
  test('Button changes the text', () => {
    render(<App />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Change to MediumVioletRed');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Change to MidnightBlue');
  })
});

describe('Checkbox works correctly', () => {
  test('Initial state', () => {
    render(<App />);

    const button = screen.getByRole('button');

    expect(button).toBeEnabled();
  })
  test('Checkbox works', () => {
    render(<App />);

    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    fireEvent.click(checkbox);

    expect(button).toBeDisabled();

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });
  test('Checkbox change to gray', () => {
    render(<App />);

    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    fireEvent.click(checkbox);

    expect(button).toHaveStyle({ background: 'gray' });

    fireEvent.click(checkbox);

    expect(button).toHaveStyle({ background: 'MediumVioletRed' });
  });
});
