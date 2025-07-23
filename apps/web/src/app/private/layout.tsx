import type { LayoutProps } from '@types';

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="flex items-center justify-center h-screen">{children}</div>
  );
}
