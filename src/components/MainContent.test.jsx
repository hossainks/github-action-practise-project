import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MainContent from './MainContent';

// My tests!
// Add yet another comment

describe('MainContent', () => {
  it('should render a button', () => {
    render(<MainContent />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show the help area after clicking the button', async () => {
    render(<MainContent />);

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByTestId('help-area')).toBeInTheDocument();
  });

  it('Add just second test', async () => {
    render(<MainContent />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByTestId('help-area')).toBeInTheDocument();
  });

  it('Second Test', async () => {});

  it('Third test', async () => {});

  it('Fourth test', async () => {});

  it('Fifth test', async () => {});

  it('Sixth test', async () => {});

  it('Lisa Sixth test', async () => {});

  it('Lisa Seventh test', async () => {});

  it('Eight Test for Cherry', async () => {});
});
