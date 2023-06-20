import React from 'react';
import navStyle from './style';
import { Link } from 'react-router-dom';
import { Box, Avatar, Stack } from '@mui/material';
import logo from '../../../img/logo_transparent.png';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';

import { logout } from '../../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const AppNavBar: React.FC = () => {
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
        <Link to="/home" style={navStyle.link}>
          <img style={navStyle.img} src={logo} alt="logo" />
        </Link>
        <Box sx={navStyle.navLinks}>
          <Link to="/" style={navStyle.homeTab}>
            <Stack direction="row" alignItems="center" gap={1}>
              <HomeIcon style={navStyle.homeIcon} />
              <Box sx={navStyle.homeText}>Home</Box>
            </Stack>
          </Link>
          <Link to="/" style={navStyle.link}>
            <NotificationsIcon />
          </Link>
          <Link to="/profile">
            <Avatar
              alt="avatar"
              src={
                user?.avatar ||
                'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
              }
              sx={navStyle.userIcon}
            />
          </Link>
          <Box style={navStyle.userTab}>
            <Link to="/profile" style={navStyle.userText}>
              {user?.name || 'User'}
            </Link>
          </Box>
          <Box style={navStyle.link}>
            <AppsIcon style={navStyle.appIcon} />
          </Box>
        </Box>
      </Box>
    )
};

export default AppNavBar;