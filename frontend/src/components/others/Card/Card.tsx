import * as React from 'react';
import Card from '@mui/material/Card';
import { Box, Modal, Typography, Button } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface Props {
    title: string
    description: string
    image: string
    link: string
}

const CardC:React.FC<Props> = function (props: Props)  {
  let { title, description, image } = props
  const [open, setOpen] = React.useState(false);

  const redirect = () => {
    const redirectLink = 'https://www.facebook.com/' + props.link;
    window.open(redirectLink, "_blank");
  }

  return (
    <>
    <Modal
      open={open}
      onClose={() => setOpen(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={
        {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }
      }>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you want to go to {title}?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Click on the button below to go to the event page.
        </Typography>
        <Button onClick={()=> console.log('Joined event')} variant="contained" sx={{ mt: 2 }}>Go to event</Button>
      </Box>
    </Modal>

    <Card onClick={() => setOpen(!open)} style={{backgroundColor: "lightgrey"}} >
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
    </>
  );
}

export default CardC;