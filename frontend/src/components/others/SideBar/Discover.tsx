import React from 'react'
import { Card, CardContent } from '@mui/material'
import userCardStyle from './styles/userCardStyle'

const Discover: React.FC = function () {
  return (
    <Card sx={userCardStyle.card}>
      <CardContent>
        Content
      </CardContent>
    </Card>
  )
}

export default Discover
