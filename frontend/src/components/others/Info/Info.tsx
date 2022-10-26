import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Info: React.FC = function () {   
  const { auth } = useSelector((state: any) => state);
  const { user } = auth;
  return (
    <Box> 
        <Typography variant="h6">Info</Typography>
        <Typography variant="body1">Full Name {user.name}</Typography>
        <Typography variant="body1">Username {user.username}</Typography>
        <Typography variant="body1">Email {user.email}</Typography>
        <Typography variant="body1">City {user.city}</Typography>
        <Typography variant="body1">Country {user.country}</Typography>        
    </Box>
  )
}

export default Info;
