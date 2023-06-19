import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { getDataAPI } from '../../utils/fetchApi'
import RateCard from '../../components/others/Card/RateCard'
import participateStyles from './styles/participateStyle'
import NavBar from '../../components/shared/NavBar/NavBar'

const ParticipatedActiv:React.FC = () => {
    const { auth } = useSelector((state: any) => state)
    const [activities, setActivites ] = React.useState([])

    React.useEffect(() => {
        if (auth.user)
            getDataAPI(`events/${auth.user.username}`, auth.token)
                .then(res => {
                    setActivites(res.data.data)
                })
                .catch(err => console.log(err))
    }, [auth.token])

    return (
        <React.Fragment>
            <NavBar displayNormal={false}/>
            <Box sx={participateStyles.activities}>
                <Box sx={participateStyles.activities__container}>
                    <Box sx={participateStyles.activities__container__title}>
                        <h1>Participated Activities</h1>
                    </Box>
                    <Box sx={participateStyles.activities__container__cards}>
                        {activities.map((activity: any) => (                        
                            <Box sx={participateStyles.card}>
                                <RateCard 
                                    title={activity.eventName}
                                    description={activity.username} 
                                    image={activity.imgLink}
                                    location={activity.location}
                                    link={''}
                                    rating={activity.rating}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default ParticipatedActiv