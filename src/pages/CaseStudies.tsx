import { Link } from "react-router-dom";

const cases = [
{
tag: "AI Operations",
result: "−32h/week",
title: "Logistics ops team cuts 32 hours/week with agent automation.",
challenge:
"Manual order triage was consuming 40+ hours of the ops team's week — error-prone, hard to scale.",
solution:
"A custom multi-step AI agent that ingests order data, applies routing rules, flags exceptions to humans, and writes back to the ERP.",
stack: ["GPT-5", "TypeScript", "Postgres", "Internal admin UI"],
},
{
tag: "Custom Software",
result: "2.1× activation",
title: "B2B SaaS replatform doubles activation in 90 days.",
challenge:
"Legacy onboarding had a 19% activation rate; users dropped off before reaching the 'aha' moment.",
solution:
"Replatformed onboarding around a guided, opinionated path. Removed three forms. Added contextual help powered by AI.",
stack: ["Next.js", "Postgres", "Stripe", "Segment"],
},
{
tag: "Growth",
result: "3.4× ROAS",
title: "DTC brand rebuilds acquisition engine to scale profitably.",
challenge:
"Spending $80k/mo with declining returns and no view into LTV by channel.",
solution:
"Built a unified analytics layer, rebuilt funnels around three winning offers, automated creative iteration with AI.",
stack: ["Meta Ads", "Klaviyo", "GA4", "Custom dashboard"],
},
];

export default function CaseStudies() {
return ( <section className="pt-32 pb-24"> <div className="mx-auto max-w-7xl px-6"> <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
Case Studies </p>

```
    <h1 className="mt-4 text-5xl text-[color:var(--navy)] md:text-6xl">
      Built systems. Measured outcomes.
    </h1>

    <div className="mt-16 space-y-6">
      {cases.map((c) => (
        <article
          key={c.title}
          className="overflow-hidden rounded-3xl border hairline bg-white"
        >
          <div className="grid gap-8 p-8 md:grid-cols-[2fr_1fr] md:p-12">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[color:var(--accent-hover)]">
                {c.tag}
              </div>

              <h2 className="mt-3 text-2xl text-[color:var(--navy)] md:text-3xl">
                {c.title}
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--navy)]">
                    Challenge
                  </div>

                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                    {c.challenge}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--navy)]">
                    Solution
                  </div>

                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                    {c.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--navy)]">
                  Stack
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border hairline bg-[color:var(--muted)] px-3 py-1 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-[color:var(--muted)] p-8">
              <div className="text-xs uppercase tracking-widest text-[color:var(--muted-foreground)]">
                Result
              </div>

              <div className="mt-2 text-5xl font-semibold text-gradient">
                {c.result}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-16">
      <Link
        to="/contact"
        className="btn-magnetic btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
      >
        Start a Project
      </Link>
    </div>
  </div>
</section>


);
}
