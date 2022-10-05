import React from 'react'
import { Box } from '@mui/material'
import CelebrationIcon from '@mui/icons-material/Celebration'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import GroupsIcon from '@mui/icons-material/Groups'
import Icons from './Icons'
import iconBarStyle from './styles/iconBarStyle'

const IconBar: React.FC = function () {
  return (
    <Box sx={iconBarStyle.container} >
      <Box sx={iconBarStyle.iconsContainer} >
        <Icons Icon={CelebrationIcon} iconColor='red' text='Party All Night' />
        <Icons Icon={ConnectingAirportsIcon} iconColor='blue'text='Travel Together' />
        <Icons Icon={EmojiPeopleIcon} iconColor='pink' text='Meet Fellow Erasmusers' />
        <Icons Icon={GroupsIcon} iconColor='yellow'text='Meetups' />
      </Box>
     </Box>
  )
}

export default IconBar
