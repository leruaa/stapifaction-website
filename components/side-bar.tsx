'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link'

export default () => (
  <NavigationMenu.Root asChild={true}>
    <nav>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild={true}>
            <Link href="/learn">Overview</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild={true}>
            <Link href="/learn/install">Installation</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </nav>
  </NavigationMenu.Root>
)
