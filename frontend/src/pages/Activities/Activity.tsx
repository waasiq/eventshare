import React from 'react';
import { Box, Button } from '@mui/material';
import activitiesStyles from './styles/activityStyles';
import CardC from '../../components/others/Card/Card';
import { useSelector } from 'react-redux';
import Scraper from './Scraper';

const Activity: React.FC = function () {
    const activity = useSelector((state: any) => state.activity);
    const [finalActivity, setFinalActivity] = React.useState(null);
    const [type, setType] = React.useState(null);

    React.useEffect(() => {
      if(activity) {
        const act = activity[0]; 
        const typ = activity[1];
        setFinalActivity(act);
        setType(typ);
        console.log(act);
      }
    }, [activity]);

    return (
        <Box sx={activitiesStyles.activitiesContainer} >
        
        {
          <>
              {finalActivity && <Scraper evnt={finalActivity} type={type} /> }
          </> 
        }

        {/* <Box sx={activitiesStyles.cardsContainer}>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
        </Box>

        <Box sx={activitiesStyles.cardsContainer}>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
          <Box sx={activitiesStyles.card}>
            <CardC
              title='Football'
              description='Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.'
              image='https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/qjxgsf7pqdmyqzsptxju'
              link='https://www.olympicchannel.com/en/sport/football/'
            />
          </Box>
        </Box> */}
      </Box>  
    )
};

export default Activity;