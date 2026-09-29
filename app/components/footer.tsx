import { Logo } from "./ui";

const links = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "#paths" },
  { label: "About us", href: "#how-it-works" },
  { label: "Contact us", href: "mailto:hello@magicai.mn" },
];

export function Footer() {
  return (
    <footer className="bg-surface px-6 py-8 md:px-12 lg:px-[120px]">
      <div className="flex flex-col gap-10 border-t border-line pt-12 pb-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-body-s text-ink-2">Learn AI like magic.</p>
          </div>
          <nav className="flex flex-wrap gap-9">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-s text-ink-2 transition hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex justify-between text-caption text-ink-3">
          <span>© 2026 Magic AI</span>
          <a href="mailto:hello@magicai.mn" className="hover:text-ink-2">
            hello@magicai.mn
          </a>
        </div>
      </div>
    </footer>
  );
}
