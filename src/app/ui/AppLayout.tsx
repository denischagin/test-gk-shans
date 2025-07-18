import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
