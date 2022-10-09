import React from 'react'
import NavBar from '../../components/shared/NavBar/NavBar'
import { Box, Typography } from '@mui/material'
import Tabs from '../../components/others/Tabs/Tabs'
import profileStyle from './styles/profileStyle'

const Profile: React.FC = function () {
  return (
    <React.Fragment>
        <NavBar />
        <Box sx={profileStyle.coverPictureContainer}>
                <img src="https://cutt.ly/gBfz10g" style={profileStyle.coverPicture} alt="cover" />
        </Box>
        <Box sx={profileStyle.container}>
            <Box sx={profileStyle.profilePictureContainer}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={profileStyle.profilePicture} alt="profile" />
            </Box>
            <Box sx={profileStyle.profileInfo}>
                <Typography variant="h4" sx={profileStyle.name}>John Doe</Typography>
                <Typography variant="h6" sx={profileStyle.username}>@johndoe</Typography>
            </Box>
        </Box>
        <Box sx={profileStyle.tabs} >
            <Tabs />
        </Box>

    </React.Fragment>
  )
}

export default Profile
