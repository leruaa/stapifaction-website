import SideBar from '@/components/side-bar'

import '../globals.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <aside className="flex-none w-64">
        <SideBar />
      </aside>
      <section className="flex-auto ml-10 mr-96">
        {children}
      </section>
    </>
  )
}