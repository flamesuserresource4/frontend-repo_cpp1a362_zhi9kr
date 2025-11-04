import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-emerald-900/40 bg-black py-10 text-sm text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} VMBoard. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <a href="#" className="hover:text-emerald-300">Terms</a>
            <a href="#" className="hover:text-emerald-300">Status</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
