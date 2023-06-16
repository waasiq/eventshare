import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import activitiesStyles from './styles/activityStyles';
import { useSelector } from 'react-redux';
import Scraper from './Scraper';

interface RootState {
  activity: [string, string] | null;
}

const Activity: React.FC = function () {
  const activity = useSelector((state: RootState) => state.activity);
  const [finalActivity, setFinalActivity] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    if (activity) {
      const [act, typ] = activity;
      setFinalActivity(act);
      setType(typ);
    }
  }, [activity]);

  return (
    <Box sx={activitiesStyles.activitiesContainer}>
      {finalActivity && <Scraper evnt={finalActivity} type={type} />}
    </Box>
  );
};

export default Activity;
