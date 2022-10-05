import React from 'react'
import { Box, Avatar } from '@mui/material'
import postStyles from './styles/postStyles'

import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

const PostMaker: React.FC = function () {
  return (
    <Box sx={postStyles.container}>
        <Box sx={postStyles.header}>
            <Avatar
                alt="avatar"
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            />

            <form style={postStyles.form} action="">
                <input
                    style = {postStyles.formInput}
                    type="text"
                    placeholder={'How is the Erasmus going?'}
                />
            </form>
        </Box>

        <Box sx={postStyles.senderBottom}>
            <Box sx={postStyles.senderOption}>
                <VideoCameraFrontIcon style={{ color: 'red' }} />
                <h3>Live video</h3>
            </Box>

            <Box sx={postStyles.senderOption}>
                <PhotoLibraryIcon style={{ color: 'green' }} />
                <h3>Photo/video</h3>
            </Box>

            <Box sx={postStyles.senderOption}>
                <EmojiEmotionsIcon style={{ color: 'orange' }} />
                <h3>Feeling/activity</h3>
            </Box>
        </Box>
    </Box>
  )
}

export default PostMaker
