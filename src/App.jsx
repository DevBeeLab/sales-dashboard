import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout'
import Overview from './pages/Overview'
import OrdersPage from './pages/OrdersPage'
import CustomerPage from './pages/CustomerPage'
import SettingsPage from './pages/SettingsPage'

const App = () => {
  return (
 <Routes>
    <Route  element={<Layout />} >
      <Route path="/" element={<Overview />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/customers" element={<CustomerPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
  )
}

export default App
