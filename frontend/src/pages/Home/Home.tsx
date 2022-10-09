import React from 'react'
import { Box } from '@mui/material'

import NavBar from '../../components/shared/NavBar/NavBar'
import SideBar from '../../components/others/SideBar/SideBar'
import Feed from '../../components/others/Feed/Feed'
import IconBar from '../../components/others/IconBar/IconBar'

import homeStyle from './styles/styles'

const Home: React.FC = function () {
  return (
    <>
      <NavBar />
      <Box sx={homeStyle.container}>
        <SideBar />
        <Feed />
        <IconBar />
      </Box>
    </>
  )
}

export default Home
