// import React from 'react'
import StartCard from './components/StartCard'
import RevenueChart from './components/RevenueChart'
import RecentOrders from './components/RecentOrders'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'

const App = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      <SideBar />
      <div className="flex-1">
      <TopBar />
      <main className="p-6 space-y-6">  
        <div className="grid grid-cols-4 "></div>
        <RevenueChart />
        <RecentOrders />
      </main>
      </div>
     
    </div>
  )
}

export default App
