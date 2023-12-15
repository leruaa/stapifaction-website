import Header from '@/components/header'
import './globals.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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