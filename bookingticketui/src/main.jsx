import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
			<BrowserRouter>
      <Navbar>
      <App />	
      </Navbar>
			</BrowserRouter>
  </React.StrictMode>,
)
