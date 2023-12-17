'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link'
import { usePathname } from 'next/navigation';

export default () => (
  <NavigationMenu.Root asChild={true}>
    <nav>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <Link href="/learn">Overview</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/learn/install">Installation</Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </nav>
  </NavigationMenu.Root>
)

const Link = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href;

  return (
    <NavigationMenu.Link asChild={true} active={isActive}>
      <NextLink className="data-[active]:font-semibold" href={href}>{children}</NextLink>
    </NavigationMenu.Link>
  );
};
