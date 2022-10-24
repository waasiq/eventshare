import React from 'react'
import NavBar from '../../components/shared/NavBar/NavBar'
import { Box, Typography } from '@mui/material'
import Tabs from '../../components/others/Tabs/Tabs'
import profileStyle from './styles/profileStyle'
import { useSelector } from 'react-redux'

const Profile: React.FC = function () {
  const { auth } = useSelector((state: any) => state);
  const { user } = auth;

  return (
    <React.Fragment>
        <NavBar />
        <Box sx={profileStyle.coverPictureContainer}>
                <img src="https://cutt.ly/gBfz10g" style={profileStyle.coverPicture} alt="cover" />
        </Box>
        <Box sx={profileStyle.container}>
            <Box sx={profileStyle.profilePictureContainer}>
                <img src={user.avatar} style={profileStyle.profilePicture} alt="profile" />
            </Box>
            <Box sx={profileStyle.profileInfo}>
                <Typography variant="h4" sx={profileStyle.name}>{user.name}</Typography>
                <Typography variant="h6" sx={profileStyle.username}>@{user.username}</Typography>
            </Box>
        </Box>
        <Box sx={profileStyle.tabs} >
            <Tabs />
        </Box>

    </React.Fragment>
  )
}

export default Profile
