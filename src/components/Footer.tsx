export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-text-faint">
        <p>&copy; {new Date().getFullYear()} Bestire</p>
        <a
          href="https://github.com/bestire"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text-secondary transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
