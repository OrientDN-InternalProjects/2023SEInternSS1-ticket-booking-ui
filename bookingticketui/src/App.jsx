import React, { useState } from 'react'
import ListFlight from './pages/ListFlight/ListFlight'
import Booking from './components/BookingForm'
import ListSearch from './pages/ListSearch/ListSearch'
import { Route, Routes } from 'react-router'

const App = () => {
  const [response, setResponse] = useState({})
  return (
    <div>
    <Routes>
				<Route index path='/' element={<Booking setResponse={setResponse}/>} />
				<Route index path='/list-flight' element={<ListFlight/>} />
				<Route index path='/list-search' element={<ListSearch response={response}/>} />
			</Routes>
    </div>
  )
}

export default App
