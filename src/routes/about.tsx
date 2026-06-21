import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lanos Innovation" },
      { name: "description", content: "Lanos Innovation is a studio engineering software, AI operations, and growth systems for ambitious businesses." },
      { property: "og:title", content: "About — Lanos Innovation" },
      { property: "og:description", content: "A studio engineering systems for the AI era." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">About</p>
        <h1 className="mt-4 text-5xl text-[color:var(--navy)] md:text-6xl">A studio engineering systems for the AI era.</h1>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-[color:var(--foreground)]/80">
          <p>Lanos Innovation exists to solve operational debt. Most businesses don't need more tools — they need better systems. Systems that compound. Systems that don't add cognitive load every time you switch a tab.</p>
          <p>We pair senior product engineers with applied AI specialists and growth operators. Every engagement is scoped, priced, and shipped with the same discipline you'd expect from a premium consulting firm — without the bloat.</p>
          <p>We don't sell AI. We sell outcomes that happen to be powered by it.</p>
        </div>
        <div className="mt-16 grid gap-8 rounded-3xl border hairline bg-[color:var(--muted)]/50 p-10 md:grid-cols-3">
          {[
            { k: "Senior-only team", v: "Every line shipped by someone with 5+ years." },
            { k: "Fixed-price builds", v: "No retainer traps. No scope creep." },
            { k: "You own everything", v: "Code, docs, and the system itself." },
          ].map((p) => (
            <div key={p.k}>
              <div className="text-sm font-semibold text-[color:var(--navy)]">{p.k}</div>
              <div className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Link to="/contact" className="btn-magnetic btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">Work with us</Link>
        </div>
      </div>
    </section>
  );
}
