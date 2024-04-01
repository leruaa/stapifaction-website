import Header from '@/components/header'
import './globals.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <main>
          <Header />
          <div className="container mx-auto flex">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}