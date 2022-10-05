import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

const App: React.FC = function () {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App
