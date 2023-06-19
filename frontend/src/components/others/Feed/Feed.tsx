import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import feedStyle from './styles/feedStyle';
import RateCard from '../../others/Card/RateCard';
import { useSelector } from 'react-redux';
import { getDataAPI } from '../../../utils/fetchApi';
import FeedHero from './FeedHero';

const Feed: React.FC = function () {
  const { auth } = useSelector((state: any) => state);
  const [activities, setActivities] = React.useState([]);

  const parseTitle = (title: string) => {
    if (title.length > 30) {
      return title.slice(0, 30) + '...';
    } else {
      return title;
    }
  };

  useEffect(() => {
    if (auth.user) {
      getDataAPI(`events/${auth.user.username}`, auth.token)
        .then(res => {
          setActivities(res.data.data);
        })
        .catch(err => console.log(err));
    }
  }, [auth.token]);

  return (
    <React.Fragment>
      <Box sx={feedStyle.container}>
        <FeedHero />

        <div className='my-4'> 
          <h1 className='text-2xl text-white font-bold  pb-3'>Your Participated Activties</h1>
          <div className="flex flex-wrap gap-3">
            {activities.map((activity: any) => (
              <div key={activity.eventName} className="w-1/4">
                <RateCard
                  title={parseTitle(activity.eventName)}
                  description={activity.username}
                  image={activity.imgLink}
                  location={activity.location}
                  link={''}
                  rating={activity.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Feed;
