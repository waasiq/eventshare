import React from 'react'
import loadingStyle from './styles/loadingStyle'
import Box from '@mui/material/Box'
import * as css from './styles/animations.css'

//! Make type declaration for CSS module

const Loading:React.FC = function () {
  return (
    <Box sx={[loadingStyle.position, loadingStyle.loading]}>
        <svg width="205" height="250" viewBox='0 0 40 50'>
            <polygon 
                stroke='#fff'
                strokeWidth='1'
                fill='none' 
                points='20,1 40,40 1,40'
            />
            <text fill='#fff' x='5' y='47'>Loading</text> 
        </svg>
    </Box>
  )
}

export default Loading