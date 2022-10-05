import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import postStyles from './styles/postStyles'

const Post: React.FC = function () {
  return (
    <Box sx={postStyles.container}>
        <Box sx={postStyles.header}>
            <Avatar
                alt="avatar"
                src="https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            />
            <Box sx={postStyles.headerText}>
            <Typography variant='h6' sx={postStyles.headerTextName}>
                Elon Musk @elonmusk
            </Typography>
            <Typography variant='subtitle2' sx={postStyles.headerTextTime}>
                1 hour ago
            </Typography>
            </Box>
        </Box>
        <Box sx={postStyles.body}>
            <Typography variant='body1' sx={postStyles.bodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
        </Box>
        <Box sx={postStyles.footer}>
            <ThumbUpIcon sx={postStyles.footerIcon} />
            <Typography variant='subtitle2' sx={postStyles.footerText}>
                1.2k
            </Typography>
        </Box>
    </Box>
  )
}

export default Post
