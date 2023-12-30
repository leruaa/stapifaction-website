'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link'
import { usePathname } from 'next/navigation';

export default () => (
  <NavigationMenu.Root asChild={true}>
    <nav>
      <NavigationMenu.List>
        <NavigationMenu.Item className="my-2">
          <Link href="/learn">Introduction</Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="my-2">
          <Link href="/learn/getting-started">Getting started</Link>
          <NavigationMenu.Sub>
            <NavigationMenu.List className="ml-4">
              <NavigationMenu.Item>
                <Link href="/learn/getting-started/first-example">First example</Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/learn/getting-started/persist-collections">Persist collections</Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/learn/getting-started/multiple-files">Multiple files/folders</Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Sub>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="my-2">
          <Link href="/learn/using-derive">Using derive</Link>
          <NavigationMenu.Sub>
            <NavigationMenu.List className="ml-4">
              <NavigationMenu.Item>
                <Link href="/learn/using-derive/attributes"><code>path</code> attribute</Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/learn/using-derive/attributes"><code>id</code> attribute</Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/learn/using-derive/attributes"><code>expand</code> attribute</Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <Link href="/learn/concepts/serde">Supported Serde attributes</Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Sub>
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
      {isActive
        ? <span>{children}</span>
        : <NextLink href={href}>{children}</NextLink>
      }
    </NavigationMenu.Link>
  );
};
