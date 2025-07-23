export default function Footer() {
  return (
    <footer className="flex items-center justify-center h-16 px-4 lg:px-6 border-t">
      <p className="text-sm">Environment: {process.env.NODE_ENV}</p>
    </footer>
  );
}
