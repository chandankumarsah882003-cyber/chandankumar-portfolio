import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
          Chandankumar
        </Link>

        <ul className="flex items-center gap-5 text-sm text-slate-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
