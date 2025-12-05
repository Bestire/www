import githubIcon from "../assets/github.svg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/bestire.jpg"
            alt="Bestire"
            className="h-8 w-8 rounded-md object-cover ring-1 ring-border group-hover:ring-border-hover transition-all"
          />
          <span className="text-sm font-medium tracking-tight">Bestire</span>
        </a>
        <nav className="flex items-center gap-1">
          <a
            href="#work"
            className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            About
          </a>
          <a
            href="https://github.com/bestire"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="" className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
