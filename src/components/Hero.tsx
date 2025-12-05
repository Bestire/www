import { ArrowRightIcon, GithubLogoIcon } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6 pt-16">
        <p className="text-sm text-text-muted mb-4 tracking-wide uppercase">
          Open Source Collective
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          We build software that
          <span className="text-text-muted">
            {" "}
            developers actually want to use.
          </span>
        </h1>
        <p className="mt-6 text-lg text-text-secondary max-w-xl leading-relaxed">
          We&apos;re engineers obsessed with developer experience, clean APIs,
          and shipping things that work.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="https://github.com/bestire"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-white active:scale-95 active:bg-text-secondary transition-all duration-150"
          >
            <GithubLogoIcon size={16} />
            View on GitHub
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            See our work
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
