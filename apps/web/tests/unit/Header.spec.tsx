import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

// Mock server action so tests don't import server-only code
vi.mock('@/actions/auth', () => ({
  signOut: vi.fn(),
}));

// Mock theme hook
vi.mock('next-app-theme/use-theme', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
}));

// Keep MountainIcon simple but accessible
vi.mock('@/components/icons/MountainIcon', () => ({
  __esModule: true,
  default: (props: any) => (
    <svg {...props}>
      <title>Mountain Icon</title>
    </svg>
  ),
}));

import Header from '@/components/Header';

describe('Header', () => {
  it('renders the header component', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the MountainIcon', () => {
    render(<Header />);
    expect(screen.getByTitle('Mountain Icon')).toBeInTheDocument();
  });

  it('includes a visually hidden company name', () => {
    render(<Header />);
    const el = screen.getByText('Acme Inc');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('sr-only');
  });

  it('has the correct layout classes', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass(
      'px-4 lg:px-6 h-14 flex items-center justify-between border-b',
    );
  });
});
