import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Outlet } from 'react-router'
import css from './AppLayout.module.scss'

export const AppLayout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <main className={`${css.main} container`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
