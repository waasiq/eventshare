import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Card, Input, CardContent, LinearProgress } from '@mui/material'
import CardC from '../../components/others/Card/Card'
import activitiesStyles from './styles/activityStyles'
import { getDataAPI } from '../../utils/fetchApi';

interface Props {
  evnt: string;
}

const Scraper:React.FC<Props> = function(props: Props )  {
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    const res = await getDataAPI(`scrape/facebook?event=${props.evnt}`) ;
    console.log(res.data.events);
    setData(res.data.events);
  };

  React.useEffect(() => {
    getData();
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
          />
        </Box>
      ); 
      
    }

    return wrappedJSX;
  }

  return (
    <Box sx={activitiesStyles.activitiesContainer} >
        { data && displayData(data) }
    </Box>
  )
};

export default Scraper;