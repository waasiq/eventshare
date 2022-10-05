import React from 'react'
import NavBar from '../../components/shared/NavBar/NavBar'
import SideBar from '../../components/others/SideBar/SideBar'
import { Box } from '@mui/material'
import homeStyle from './styles'

const Home: React.FC = function () {
  return (
    <>
      <NavBar />
      <Box sx={homeStyle.container}>
        <SideBar />
        <h1>Home</h1>
      </Box>
    </>
  )
}

export default Home
