import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
    title: string
    description: string
    image: string
    link: string
}

const CardC:React.FC<Props> = function (props: Props)  {
  let { title, description, image } = props

  const redirect = () => {
    const redirectLink = 'https://www.facebook.com/' + props.link;
    window.open(redirectLink, "_blank");
  }

  return (
    <Card onClick={redirect} style={{backgroundColor: "lightgrey"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardC;