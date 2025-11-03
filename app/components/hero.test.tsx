import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByText(/Track your Expenses to Save Money/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Hero />);
    const description = screen.getByText(/Helps you to organize your income and expenses/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the select dropdown with options', () => {
    render(<Hero />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
    expect(screen.getByText('Demo 1')).toBeInTheDocument();
    expect(screen.getByText('Demo 2')).toBeInTheDocument();
    expect(screen.getByText('Demo 3')).toBeInTheDocument();
  });

  it('renders the illustration image', () => {
    render(<Hero />);
    const image = screen.getByAltText('Xpense Illustration');
    expect(image).toBeInTheDocument();
  });
});
