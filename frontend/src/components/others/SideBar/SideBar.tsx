import React from 'react'
import UserCard from './UserCard'
import Discover from './Discover'
import { Box } from '@mui/material'
import sideBarStyle from './styles/sideBarStyle'

const SideBar: React.FC = function () {
  return (
    <Box sx={sideBarStyle.sidebar} >
        <UserCard />
        {/* <Discover /> */}
     </Box>
  )
}

export default SideBar
