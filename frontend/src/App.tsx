import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Party from './pages/Party/Party'

import Notify from './components/shared/Notify/Notify'

const App: React.FC = function () {
  return (
      <Router>
        <Notify />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/party" element={<Party />} />
        </Routes>
      </Router>
  )
}

export default App
