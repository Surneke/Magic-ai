import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { Button, Logo, sectionX } from "./ui"

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Courses", href: "/courses" }
]

export function Navbar() {
  return (
    <header
      className={`sticky top-0 z-50 flex h-[82px] items-center justify-between border-b border-line bg-canvas/90 backdrop-blur ${sectionX}`}
    >
      <Logo />
      <nav className='hidden items-center gap-8 md:flex'>
        {links.map(link => (
          <Link
            key={link.label}
            href={link.href}
            className='text-label-m text-ink-2 transition hover:text-ink'
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className='flex items-center gap-3'>
        <div className='hidden md:block'>
          <Button href='/get-started'>Get started</Button>
        </div>
        <MobileMenu links={links} />
      </div>
    </header>
  )
}
