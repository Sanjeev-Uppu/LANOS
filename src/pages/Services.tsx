import { Link } from "react-router-dom";
import { ArrowRight, Code2, Bot, TrendingUp, Check } from "lucide-react";

const services = [
{
icon: Code2,
title: "Custom Software",
desc: "Websites, web apps, and mobile platforms engineered for clarity and scale.",
points: [
"Marketing & brand sites",
"Internal tools & dashboards",
"Web & mobile applications",
"API & platform engineering",
],
},
{
icon: Bot,
title: "AI Agents & Automation",
desc: "Operational AI that takes work off your plate — not just demos.",
points: [
"Workflow automation",
"AI assistants & copilots",
"Custom multi-step agents",
"Internal AI ops",
],
},
{
icon: TrendingUp,
title: "AI Ads & Growth",
desc: "Acquisition engines built to compound: funnels, ads, analytics.",
points: [
"High-converting funnels",
"Paid acquisition",
"Attribution & analytics",
"Lifecycle automation",
],
},
];

export default function Services() {
return ( <section className="pt-32 pb-24"> <div className="mx-auto max-w-7xl px-6"> <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
Services </p>

```
    <h1 className="mt-4 max-w-3xl text-5xl text-[color:var(--navy)] md:text-6xl">
      Systems, not services.
    </h1>

    <p className="mt-6 max-w-2xl text-base text-[color:var(--muted-foreground)]">
      Three pillars that interlock. Choose one or combine them into a single
      operating system for your business.
    </p>

    <div className="mt-16 space-y-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="grid gap-8 rounded-3xl border hairline bg-white p-8 md:grid-cols-[1fr_2fr] md:p-12"
        >
          <div>
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--navy), var(--accent-hover))",
              }}
            >
              <s.icon className="h-5 w-5 text-white" />
            </div>

            <h2 className="mt-6 text-3xl text-[color:var(--navy)]">
              {s.title}
            </h2>

            <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
              {s.desc}
            </p>
          </div>

          <ul className="grid gap-3 self-center md:grid-cols-2">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent-hover)]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-16">
      <Link
        to="/contact"
        className="btn-magnetic btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
      >
        Start a project
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
</section>


);
}
