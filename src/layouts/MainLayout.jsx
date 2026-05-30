import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'

function MainLayout() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Topbar />
      </div>
      <div className="pt-[72px]">
        <Outlet />
      </div>

    </div>
  )
}

export default MainLayout