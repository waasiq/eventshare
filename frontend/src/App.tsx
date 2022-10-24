import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Party from './pages/Party/Party'
import Register from './pages/Register/Register'

import Notify from './components/shared/Notify/Notify'
import { refreshToken } from './redux/actions/authAction'
import { useSelector, useDispatch } from 'react-redux'

const App: React.FC = function () {
  const { auth } = useSelector((state: any) => state)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch]) 

  return (
      <Router>
        <Notify />
        <Routes>
          <Route path="/" element={
            auth.token ? <Home /> : <Login />
          } />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/party" element={<Party />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
  )
}

export default App
