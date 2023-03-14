import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Support from './components/Support/Support'
import Search from './components/Search/Search'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import Booking from './components/BookingForm'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
    <Routes>
				<Route index path='/' element={<Booking/>} />
			</Routes>
    </div>
  )
}

export default App
