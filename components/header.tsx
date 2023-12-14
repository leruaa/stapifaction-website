'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link'

export default () => (
  <header className="mb-2 py-2 border-b">
    <NavigationMenu.Root asChild={true}>
      <nav className="container mx-auto">
        <NavigationMenu.List className="flex gap-4">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild={true}>
              <Link href="/">Home</Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild={true}>
              <Link href="/learn">Learn</Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </nav>
    </NavigationMenu.Root>
  </header >
)
