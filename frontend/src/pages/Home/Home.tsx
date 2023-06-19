import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../../components/shared/NavBar/NavBar'
import SideBar from '../../components/others/SideBar/SideBar'
import Feed from '../../components/others/Feed/Feed'
import homeStyle from './styles/styles'

const Home: React.FC = function () {
  return (
    <React.Fragment>
      <NavBar displayNormal={false} />
      <Box sx={homeStyle.container}>
        <Feed />
        <SideBar />
      </Box>
    </React.Fragment>
  )
}

export default Home
