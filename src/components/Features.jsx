import { BarChart3, Boxes, FileTree, Gauge, HardDrive, Keyboard, Network, ServerCog, Shield, Terminal } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Realtime Metrics",
    desc: "Per-second CPU, Memory, Disk and Network usage — always live.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Historical performance with 15m/1h/6h windows backed by InfluxDB.",
  },
  {
    icon: HardDrive,
    title: "Disks & Partitions",
    desc: "Visualize storage, manage partitions and physical disks with ease.",
  },
  {
    icon: FileTree,
    title: "File Browser + Editor",
    desc: "Preview images/videos/PDFs, edit with Monaco, and manage files.",
  },
  {
    icon: Boxes,
    title: "Packages & Plugins",
    desc: "Search apt repos, manage packages, and extend with plugin support.",
  },
  {
    icon: ServerCog,
    title: "Services",
    desc: "Start, stop, restart and inspect logs — all in one place.",
  },
  {
    icon: Keyboard,
    title: "Terminal Tabs",
    desc: "xterm.js over a secure reverse socket — no IPs or SSH needed.",
  },
  {
    icon: Network,
    title: "Networks",
    desc: "Firewall rules, interfaces and ports — managed visually.",
  },
  {
    icon: Shield,
    title: "RBAC",
    desc: "Fine-grained, multi-level access control for teams and orgs.",
  },
  {
    icon: Terminal,
    title: "Easy Onboarding",
    desc: "Connect via SSH or one-line install from our apt repository.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From terminal to effortless</h2>
          <p className="mt-4 text-zinc-300">
            VMBoard translates DevOps tasks into a fast, modern interface — designed with a hacker aesthetic in emerald and black.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-emerald-900/40 bg-zinc-950 p-6 transition hover:border-emerald-700/60 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_20px_60px_-20px_rgba(16,185,129,.25)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-400/10" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
