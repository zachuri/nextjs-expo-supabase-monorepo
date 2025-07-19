'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-app-theme/use-theme';

import { Button as ButtonComponent } from '@repo/ui/components/ui/button';

// React 19 compatibility - temporary until ecosystem catches up
// biome-ignore lint/suspicious/noExplicitAny: Required for React 19 forwardRef compatibility
const Button = ButtonComponent as any;

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button size="icon" variant="outline" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Sun className="h-6 w-6" />
      ) : (
        <Moon className="h-6 w-6" />
      )}
    </Button>
  );
}
