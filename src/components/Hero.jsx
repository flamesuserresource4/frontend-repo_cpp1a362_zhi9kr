import Spline from "@splinetool/react-spline";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[72vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/40 px-3 py-1 text-xs text-emerald-300 shadow-sm backdrop-blur">
          <Terminal size={14} />
          <span>GUI for your servers — the hacker way</span>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Manage Linux VMs with a beautiful, fast GUI
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          VMBoard turns complex terminal tasks into a delightful visual workflow. Connect any Debian-based server today — other distros plus macOS and Windows coming soon.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            Explore features
            <ArrowRight size={16} className="ml-2" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-emerald-500/30 bg-black/40 px-5 py-3 text-sm font-medium text-emerald-200 transition hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Sign in with GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
