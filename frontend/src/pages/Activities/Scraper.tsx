import React, { useState, useEffect } from 'react';
import { Box, LinearProgress } from '@mui/material';
import CardC from '../../components/others/Card/Card';
import activitiesStyles from './styles/activityStyles';
import { getDataAPI } from '../../utils/fetchApi';
import { motion } from 'framer-motion';

interface EventData {
  name: string;
  date: string;
  imgLink: string;
  link: string;
  location: string;
}

interface Props {
  evnt: string;
  type: string | null;
}

const Scraper: React.FC<Props> = function (props: Props) {
  const [data, setData] = useState<EventData[] | null>(null);
  const { type } = props;
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);

    console.log(props.evnt, type);
    try{
        if (type === 'fb') {
          const res = await getDataAPI(`scrape/facebook?event=${props.evnt}`);
          console.log(res.data.events);
          setData(res.data.events);
        } else if (type === 'linkedin') {
          const res = await getDataAPI(`scrape/linkedin?event=${props.evnt}`);
          console.log(res.data.events);
          setData(res.data.events);
        } else if (type === 'meetup') {
          const res = await getDataAPI(`scrape/meetup?event=${props.evnt}`);
          console.log(res.data.events);
          setData(res.data.events);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
  };


  useEffect(() => {
    getData();
  }, [props.evnt, type]);

  const displayData = (data: EventData[] | null) => {
    const wrappedJSX: JSX.Element[] = [];

    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (i % 4 === 0 || i === data.length - 1) {
          wrappedJSX.push(
            <Box key={i} sx={activitiesStyles.cardsContainer}>
              {data.slice(i - 3, i + 1).map((item: EventData, index: number) => (
                <Box key={index} sx={activitiesStyles.card}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CardC
                      title={item.name}
                      description={item.date}
                      image={item.imgLink}
                      link={item.link}
                      location={item.location}
                    />
                  </motion.div>
                </Box>
              ))}
            </Box>
          );
        }
      }
    }

    return wrappedJSX;
  };

  return (
    <Box sx={activitiesStyles.activitiesContainer}>
      {loading && <LinearProgress />}
      {data && displayData(data)}
    </Box>
  );
};

export default Scraper;
