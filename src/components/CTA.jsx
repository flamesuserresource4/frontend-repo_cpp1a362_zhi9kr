import { ArrowRight, Lock } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Own your infrastructure without the friction</h2>
            <p className="mt-4 text-zinc-300">
              Authenticate with GitHub, add servers via SSH or one-line install, and start managing everything visually. Your VMs connect out via a secure reverse socket so private networks are welcome.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Sign in with GitHub
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-emerald-500/30 bg-black/40 px-5 py-3 text-sm font-medium text-emerald-200 transition hover:border-emerald-400/60 hover:text-emerald-100"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
              <Lock size={14} className="text-emerald-300" />
              OAuth only — no password sprawl. API keys per account for agent installs.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-emerald-900/40 bg-zinc-950 p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Stat label="Connected VMs" value="128" />
                <Stat label="Avg. CPU Savings" value="42%" />
                <Stat label="Setup Time" value="< 2 min" />
                <Stat label="Downtime" value="0 restarts" />
              </div>
              <div className="mt-6 h-2 w-full overflow-hidden rounded bg-zinc-900">
                <div className="h-full w-3/4 bg-gradient-to-r from-emerald-500 to-emerald-300" />
              </div>
              <p className="mt-3 text-xs text-zinc-400">Live metrics stream in real-time. Historical analytics available up to 6h (more coming).</p>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-zinc-400">{label}</div>
      <div className="mt-1 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}
