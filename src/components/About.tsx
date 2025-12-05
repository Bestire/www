export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm text-text-muted uppercase tracking-wide mb-6">
              About
            </h2>
            <p className="text-2xl font-medium leading-relaxed tracking-tight">
              We're not a company. We're a group of people who like building
              things together.
            </p>
          </div>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              Bestire started as a shitty developer frustrated with tools that
              suck. So we made our own. Then we open-sourced them because good
              tools should be free.
            </p>
            <p>
              We care about the details others skip. Performance. Error messages
              that help. Documentation that doesn't assume you already know
              everything.
            </p>
            <p>
              Want to contribute? We're always looking for people who care about
              craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
