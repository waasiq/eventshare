import React from 'react'
import { Stack, Typography } from '@mui/material'
import iconBarStyle from './styles/iconBarStyle'
import { Link } from 'react-router-dom'
interface Props {
  Icon: any
  text: string
  iconColor: string
  link: string
}

const Icons: React.FC<Props> = function (props: Props) {
  const { Icon, text, iconColor, link } = props

  return (
      <Stack sx={iconBarStyle.icon} direction="row" alignItems="center" gap={1}>
          <Icon sx={{ color: iconColor }} />
          <Link to={link} >
            <Typography sx={iconBarStyle.iconText} variant="body1"> { text }</Typography>
          </Link>
      </Stack>
  )
}

export default Icons
