export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16">
      <section className="rounded-3xl bg-white p-10 shadow-xl shadow-metro-primary/10">
        <p className="uppercase text-sm tracking-[0.3em] text-metro-primary">MetroX</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-metro-dark sm:text-5xl lg:text-6xl">
          A modern companion for Bangladesh&apos;s metro riders
        </h1>
        <p className="mt-6 text-lg text-metro-dark/70">
          Real-time arrivals, intuitive trip planning, bilingual support, and proactive alerts so
          every MetroX journey feels effortless.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#"
            className="rounded-full bg-metro-primary px-8 py-3 font-semibold text-white transition hover:bg-metro-primary/90"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="rounded-full border border-metro-dark/15 px-8 py-3 font-semibold text-metro-dark hover:border-metro-primary/40"
          >
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Live Arrivals",
            description: "Minute-by-minute updates for every station across the network.",
          },
          {
            title: "Smart Planner",
            description: "Compare routes, travel times, and fares with a single search.",
          },
          {
            title: "Service Alerts",
            description: "Know about maintenance windows or delays before you tap in.",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-metro-dark/10 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-metro-dark">{card.title}</h3>
            <p className="mt-3 text-metro-dark/70">{card.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-metro-primary to-sky-500 p-8 text-white">
        <h2 className="text-3xl font-bold">Built for Dhaka&apos;s next chapter</h2>
        <p className="mt-4 max-w-3xl text-white/90">
          Designed in Bangladesh for the MetroX rider, the web experience mirrors the app with
          bilingual content, offline fallbacks, and a visual language inspired by metro lines.
        </p>
      </section>
    </main>
  );
}
