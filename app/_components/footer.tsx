import Link from "next/link"
import { Logo } from "./ui"

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "mailto:magiccodeai@gmail.com " }
]

export function Footer() {
  return (
    <footer className='bg-surface px-6 py-8 md:px-12 lg:px-[120px]'>
      <div className='flex flex-col gap-10 border-t border-line pt-12 pb-8'>
        <div className='flex flex-col justify-between gap-8 md:flex-row md:items-start'>
          <div className='flex flex-col gap-3'>
            <Logo />
            <p className='text-body-s text-ink-2'>Learn AI like magic.</p>
          </div>
          <nav className='flex flex-wrap gap-9'>
            {links.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className='text-body-s text-ink-2 transition hover:text-ink'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex justify-between text-caption text-ink-3'>
          <span>© 2026 MAGIC CODE AI LLC. All rights reserved.</span>
          <a href='mailto:magiccodeai@gmail.com ' className='hover:text-ink-2'>
            magiccodeai@gmail.com 
          </a>
        </div>
      </div>
    </footer>
  )
}
