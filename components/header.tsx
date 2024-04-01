'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link'
import Image from 'next/image'

export default () => (
  <header className="mb-2 py-2 border-b">
    <NavigationMenu.Root asChild={true}>
      <nav className="container mx-auto">
        <NavigationMenu.List className="flex gap-8 items-center">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild={true}>
              <Link href="/" className="flex no-link">
                <Image src="/img/logo_icon.png" alt="Logo" width={32} height={32} />
                <strong className="text-2xl font-bold">Stapifaction</strong>
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="grow flex gap-4">
            <NavigationMenu.Link asChild={true}>
              <Link href="/learn" className="link">Learn</Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild={true}>
              <Link href="/learn" className="link">
                <Image src="/img/github-mark.svg" alt="Github" width={20} height={20} />
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </nav>
    </NavigationMenu.Root>
  </header >
)
