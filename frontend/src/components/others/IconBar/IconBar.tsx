import React from 'react'
import { Box, Typography } from '@mui/material'
import CelebrationIcon from '@mui/icons-material/Celebration'
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import GroupsIcon from '@mui/icons-material/Groups'
import Icons from './Icons'
import iconBarStyle from './styles/iconBarStyle'

const IconBar: React.FC = function () {
  return (
    <Box sx={iconBarStyle.container} >
      <Typography variant="h5">Discover</Typography>
      <Box sx={iconBarStyle.iconsContainer} >
        <Icons Icon={LocalActivityIcon} iconColor='orange' text='Activities' link='/activities' />
        <Icons Icon={ConnectingAirportsIcon} iconColor='blue'text='Participated Activities' link='/activities/participated' />
        <Icons Icon={CelebrationIcon} iconColor='red' text='Party All Night' link='' />
        <Icons Icon={EmojiPeopleIcon} iconColor='pink' text='Meet Fellow Erasmusers' link='' />
        <Icons Icon={GroupsIcon} iconColor='yellow'text='Meetups' link='' />
      </Box>
     </Box>
  )
}

export default IconBar
