import Header from '@/components/header'
import '../globals.css'

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
          <section className="container mx-auto">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}