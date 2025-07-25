import { Toaster } from '@ui/components/ui/sonner';
import { ThemeScript } from 'next-app-theme/theme-script';
import type React from 'react';

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <Toaster />
      <ThemeScript />
    </>
  );
}
