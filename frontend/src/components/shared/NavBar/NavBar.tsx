import React, { useState } from 'react'
import navStyle from './style'
import { Link } from 'react-router-dom'
import { Box, Avatar, Stack, Menu, MenuItem, ListItemIcon } from '@mui/material'
import logo from '../../../img/logo_transparent.png';

//* Icons
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HomeIcon from '@mui/icons-material/Home'
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import { logout } from '../../../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'

const NavBar: React.FC = function () {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState();
  
  const { auth } = useSelector((state: any) => state);
  let { user } = auth;

  if (!user) {
    user = JSON.parse(localStorage.getItem('user') as any);
  }

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={navStyle.navbar}>
        <Box sx={navStyle.name}>
            <img style={navStyle.img} src={logo} alt="logo" />
        </Box>
        <Box sx={navStyle.navLinks}>
          <Link to="/home" style={navStyle.homeTab}>
            <Stack direction="row" alignItems="center" gap={1}>
              <HomeIcon style={navStyle.homeIcon} />
              <Box sx={navStyle.homeText}>Home</Box>
            </Stack>
          </Link>
          <Link to="/" style={navStyle.link}><NotificationsIcon /></Link>
          <Link to="/profile">
            <Avatar
              alt="avatar"
              src={user.avatar}
              sx={navStyle.userIcon}
            />
          </Link>
          <Box style={navStyle.userTab}>
            <Link to="/profile" style={navStyle.userText}>{user.name}</Link>
          </Box>
          <Box style={navStyle.link} >
            <AppsIcon style={navStyle.appIcon} onClick={() => setOpen(true)} />
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              sx={navStyle.dropDownMenu}
              onClose={() => setOpen(false)}               
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
    </Box>
  )
}

export default NavBar
