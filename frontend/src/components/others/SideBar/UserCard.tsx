import React from 'react'
import { Box, Card, CardContent, CardMedia, Avatar, Typography } from '@mui/material'
import userCardStyle from './styles/userCardStyle'
import { useSelector } from 'react-redux'

const UserCard: React.FC = function () {
  const { auth } = useSelector((state: any) => state);
  const { user } = auth;

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
          src={user.avatar}
          sx={userCardStyle.avatar}
        />
        <Box sx={userCardStyle.content}>
          <Typography variant="h6" sx={userCardStyle.name}>
            {user.name}
          </Typography>
          <Typography variant="subtitle2" sx={userCardStyle.username}>
            @{user.username}
          </Typography>
          <Typography variant="subtitle2" sx={userCardStyle.username}>
            {user.city}, {user.country}
          </Typography>
          <Typography variant="body1" sx={userCardStyle.bio}>
            I am a full stack developer
          </Typography>
        </Box>
        <Box sx={userCardStyle.stats}>
          <Box sx={userCardStyle.stat}>
            <Typography variant="h6" sx={userCardStyle.statNumber}>
              {user.followers.length}
            </Typography>
            <Typography variant="subtitle2" sx={userCardStyle.statLabel}>
              {user.followers.length === 1 ? 'Follower' : 'Followers'}
            </Typography>
          </Box>
          <Box sx={userCardStyle.stat}>
            <Typography variant="h6" sx={userCardStyle.statNumber}>
              {user.following.length}
            </Typography>
            <Typography variant="subtitle2" sx={userCardStyle.statLabel}>
              Following
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserCard
