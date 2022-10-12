import React from 'react'
import { Stack, Typography } from '@mui/material'
import iconBarStyle from './styles/iconBarStyle'

interface Props {
  Icon: any
  text: string
  iconColor: string
}

const Icons: React.FC<Props> = function (props: Props) {
  const { Icon, text, iconColor } = props

  return (
    <Stack sx={iconBarStyle.icon} direction="row" alignItems="center" gap={1}>
      <Icon sx={{ color: iconColor }} />
      <Typography sx={iconBarStyle.iconText} variant="body1"> { text }</Typography>
    </Stack>
  )
}

export default Icons
