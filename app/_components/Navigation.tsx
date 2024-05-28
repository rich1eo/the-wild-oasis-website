'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainNavigationPaths = [
  { title: 'Cabins', href: '/cabins' },
  { title: 'About us', href: '/about' },
  { title: 'Account', href: '/account' },
];

export function Navigation() {
  const mainPathname = '/' + usePathname().split('/')[1];

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        {mainNavigationPaths.map(({ href, title }) => (
          <li key={crypto.randomUUID()}>
            <Link
              href={href}
              className={`transition-colors hover:text-accent-400 ${href === mainPathname ? 'text-accent-400' : ''}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
