import "./index.css";
import logo from "./bestire.jpg";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
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
              <GitHubIcon className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="min-h-[85vh] flex items-center">
          <div className="max-w-5xl mx-auto px-6 pt-16">
            <p className="text-sm text-text-muted mb-4 tracking-wide uppercase">
              Open Source Collective
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
              We build software that
              <span className="text-text-muted"> developers actually want to use.</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
              We&apos;re engineers obsessed with developer experience,
              clean APIs, and shipping things that work.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/bestire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-white transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                View on GitHub
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                See our work
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="py-24 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="text-sm text-text-muted uppercase tracking-wide">Selected Work</h2>
            </div>
            <div className="space-y-1">
              <ProjectRow
                name="empty title"
                description="empty description"
                tags={["tags", "go", "here"]}
                href="#"
              />
              <ProjectRow
                name="empty title"
                description="empty description"
                tags={["tags", "go", "here"]}
                href="#"
              />
              <ProjectRow
                name="empty title"
                description="empty description"
                tags={["tags", "go", "here"]}
                href="#"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-24 border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-sm text-text-muted uppercase tracking-wide mb-6">About</h2>
                <p className="text-2xl font-medium leading-relaxed tracking-tight">
                  We're not a company. We're a group of people who like building things together.
                </p>
              </div>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  Bestire started as a shitty developer frustrated with tools that suck.
                  So we made our own. Then we open-sourced them because good tools should be free.
                </p>
                <p>
                  We care about the details others skip. Performance. Error messages that help.
                  Documentation that doesn't assume you already know everything.
                </p>
                <p>
                  Want to contribute? We're always looking for people who care about craft.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

function ProjectRow({
  name,
  description,
  tags,
  href,
}: {
  name: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between py-5 border-b border-border hover:border-border-hover transition-colors"
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium group-hover:text-text-secondary transition-colors">
          {name}
        </h3>
        <p className="mt-1 text-sm text-text-muted truncate">{description}</p>
      </div>
      <div className="hidden sm:flex items-center gap-2 ml-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs text-text-muted bg-bg-elevated rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <ArrowIcon className="ml-6 h-5 w-5 text-text-faint group-hover:text-text-secondary group-hover:translate-x-1 transition-all" />
    </a>
  );
}

export default App;
