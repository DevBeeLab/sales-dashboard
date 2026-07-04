import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

const Layout = () => {
  return (
   <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <main className="p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
