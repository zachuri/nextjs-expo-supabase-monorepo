import type { LayoutProps } from '@types';

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center">{children}</div>
  );
}

export default Layout;
