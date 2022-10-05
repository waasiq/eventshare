import React from 'react'
import { Box, Card, CardContent, CardMedia, Avatar, Typography } from '@mui/material'
import userCardStyle from './styles/userCardStyle'

const UserCard: React.FC = function () {
  return (
    <Card sx={userCardStyle.card}>
      <CardContent>
        <CardMedia
          component="img"
          image="https://i.pinimg.com/originals/53/9b/0a/539b0aa135d8b377647c9548a59de939.jpg"
          alt="cover"
          sx={userCardStyle.coverPic}
        />
        <Avatar
          alt="avatar"
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          sx={userCardStyle.avatar}
        />
        <Box sx={userCardStyle.content}>
          <Typography variant="h6" sx={userCardStyle.name}>
            Waasiq Masood
          </Typography>
          <Typography variant="subtitle2" sx={userCardStyle.username}>
            @waasiqmasood
          </Typography>
          <Typography variant="subtitle2" sx={userCardStyle.username}>
            Munich, Germany
          </Typography>
          <Typography variant="body1" sx={userCardStyle.bio}>
            I am a full stack developer
          </Typography>
        </Box>
        <Box sx={userCardStyle.stats}>
          <Box sx={userCardStyle.stat}>
            <Typography variant="h6" sx={userCardStyle.statNumber}>
              10
            </Typography>
            <Typography variant="subtitle2" sx={userCardStyle.statLabel}>
              Following
            </Typography>
          </Box>
          <Box sx={userCardStyle.stat}>
            <Typography variant="h6" sx={userCardStyle.statNumber}>
              10
            </Typography>
            <Typography variant="subtitle2" sx={userCardStyle.statLabel}>
              Followers
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserCard
