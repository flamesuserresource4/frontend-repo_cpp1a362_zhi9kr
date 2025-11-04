import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/40 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30 grid place-items-center">
            <span className="text-emerald-400 font-black">V</span>
          </div>
          <span className="font-semibold tracking-tight text-white">VMBoard</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-emerald-300 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-md border border-emerald-500/30 px-3 py-2 text-sm text-emerald-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-200 md:inline-block"
          >
            Sign in with GitHub
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/30 text-zinc-200 transition hover:border-emerald-400/50 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-emerald-500/30 text-zinc-200 transition hover:border-emerald-400/50 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-emerald-900/40 bg-black/90 md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="rounded-md px-2 py-2 text-zinc-200 hover:bg-emerald-500/10 hover:text-emerald-200">
                  {n.label}
                </a>
              ))}
              <a href="#" className="rounded-md border border-emerald-500/30 px-2 py-2 text-emerald-300">
                Sign in with GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
