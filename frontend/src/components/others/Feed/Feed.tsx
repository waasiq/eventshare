import React from 'react'
import { Box } from '@mui/material'
import PostMaker from './PostMaker'
import Post from './Post'
import feedStyle from './styles/feedStyle'

const Feed: React.FC = function () {
  return (
    <>
        <Box sx={feedStyle.container} >
          <PostMaker />
          <Post />
        </Box>
    </>
  )
}

export default Feed
