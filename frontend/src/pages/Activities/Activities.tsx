import React from 'react'
import { Box } from '@mui/material'
import NavBar from '../../components/shared/NavBar/NavBar'
import ActivitySideBar from './ActivitySideBar'
import Activity from './Activity'

import activitiesStyles from './styles/activityStyles'

const Activities: React.FC = function () {
  return (
    <React.Fragment>
        <NavBar />

        <Box sx={activitiesStyles.mainContainer} >
          <ActivitySideBar />        
          <Activity />
        </Box>
    </React.Fragment>
  )
}

export default Activities