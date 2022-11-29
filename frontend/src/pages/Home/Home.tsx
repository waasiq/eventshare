import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../../components/shared/NavBar/NavBar'
import SideBar from '../../components/others/SideBar/SideBar'
import Feed from '../../components/others/Feed/Feed'
import IconBar from '../../components/others/IconBar/IconBar'
import homeStyle from './styles/styles'

import { useSelector } from 'react-redux'

const Home: React.FC = function () {
  const { auth } = useSelector((state: any) => state);
  let { user } = auth;

  return (
    <>
      <NavBar />
      <Box sx={homeStyle.container}>
        <IconBar />
        <Feed />
        <SideBar />
      </Box>
    </>
  )
}

export default Home
