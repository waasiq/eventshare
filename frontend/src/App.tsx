import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Test from './pages/Test'

const App: React.FC = function () {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
  )
}

export default App
