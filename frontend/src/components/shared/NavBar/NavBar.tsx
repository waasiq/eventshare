import React from 'react'
import navStyle from './style'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import logo from '../../../img/logo-transp.png'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'

const NavBar: React.FC = function () {
  return (
      <Box sx={navStyle.navbar}>
          <Box sx={navStyle.name}>
              <img style={navStyle.img} src={logo} alt="logo" />
          </Box>
          <Box sx={navStyle.navLinks}>
              <HomeIcon style={navStyle.homeIcon} />
              <Box style={navStyle.homeTab} >
                <Link to="/" style={navStyle.homeText}>Home</Link>
              </Box>
              <Link to="/" style={navStyle.link}><NotificationsIcon /></Link>
              <PersonIcon style={navStyle.userIcon}/>
              <Box style={navStyle.userTab}>
                <Link to="/" style={navStyle.userText}>Waasiq Masood</Link>
              </Box>
              <Link to="/" style={navStyle.link}><AppsIcon /></Link>
          </Box>
      </Box>
  )
}

export default NavBar
