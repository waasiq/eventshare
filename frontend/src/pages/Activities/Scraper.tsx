import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Card, Input, CardContent, LinearProgress } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import CardC from '../../components/others/Card/Card'
import activitiesStyles from './styles/activityStyles'
import { getDataAPI } from '../../utils/fetchApi';

interface Props {
  evnt: string;
  type: any;
}

const Scraper:React.FC<Props> = function(props: Props )  {
  const [data, setData] = useState<any>(null);
  const { evnt, type } = props;
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    if (type == 'fb') {
      const res = await getDataAPI(`scrape/facebook?event=${props.evnt}`) ;
      console.log(res.data.events);
      setData(res.data.events);
    } else if (type == 'lnkdn') {
      const res = await getDataAPI(`scrape/linkedin?event=${props.evnt}`) ;
      console.log(res.data.events);
      setData(res.data.events);
    } else if (type == 'meetup') {
      const res = await getDataAPI(`scrape/meetup?event=${props.evnt}`) ;
      console.log(res.data.events);
      setData(res.data.events);
    }
  };

  React.useEffect(() => {
    getData();
    if (data) setLoading(false);
  }, [data]);

  const displayData:any = (data:any) => {
    let JSX = [];
    let wrappedJSX = [];
  
    for (let i = 0; i < data.length; i++) {
      if (i % 4 === 0 || i === data.length - 1)  {
        wrappedJSX.push(
          <Box sx={activitiesStyles.cardsContainer}>
            {JSX}
          </Box>
        )
        JSX = [];
      }

      if(data[i].date && data[i].date.length > 100) {
        data[i].date = data[i].date.substring(0, 100) + '...';
        console.log(data[i].date);
      }
      else if(!data[i].date) data[i].date = 'No description available';
      
      JSX.push(
        <Box sx={activitiesStyles.card}>
          <CardC
            title={data[i].name}
            description={data[i].date}
            image={data[i].imgLink}
            link={data[i].link}
            location={data[i].location}
          />
        </Box>
      ); 
      
    }

    return wrappedJSX;
  }

  return (
    <Box sx={activitiesStyles.activitiesContainer} >
        { loading && <LinearProgress /> }
        { data && displayData(data) }
    </Box>
  )
};

export default Scraper;