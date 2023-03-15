import React from 'react'
import ListFlight from './pages/ListFlight/ListFlight'
import Booking from './components/BookingForm'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
    <Routes>
				<Route index path='/' element={<Booking/>} />
				<Route index path='/list-flight' element={<ListFlight/>} />
			</Routes>
    </div>
  )
}

export default App
