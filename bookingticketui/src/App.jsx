import React from 'react'
import ListFlight from './pages/ListFlight/ListFlight'
import Booking from './components/BookingForm'
import ContactForm from './components/ContactDetail/ContactForm'
import SignUp from './components/SignUp/SignUp'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
    <Routes>
				<Route index path='/' element={<Booking/>} />
				<Route path='/contact-detail' element={<ContactForm/>} />
				<Route index path='/list-flight' element={<ListFlight/>} />
				<Route path='/sign-up' element={<SignUp/>} />
			</Routes>
    </div>
  )
}

export default App
