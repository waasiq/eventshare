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
      console.log(activity)
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
      </Box>  
    )
};

export default Activity;