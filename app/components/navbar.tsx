import { Button, Logo, sectionX } from "./ui";

const links = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#how-it-works" },
  { label: "Get Started", href: "#enroll" },
];

export function Navbar() {
  return (
    <header
      className={`sticky top-0 z-50 flex h-[82px] items-center justify-between border-b border-line bg-canvas/90 backdrop-blur ${sectionX}`}
    >
      <Logo />
      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-label-m text-ink-2 transition hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <Button href="#paths">Explore courses</Button>
    </header>
  );
}
