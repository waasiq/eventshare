import * as React from 'react';
import { Box, Modal, Typography, Button, Snackbar, Alert } from '@mui/material';
import { Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { postDataAPI } from '../../../utils/fetchApi';
import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
    title: string
    description: string
    image: string
    link: string
    rating: number
    location: string
}

const RateCard:React.FC<Props> = function (props: Props)  {
  let { title, description, image, link, rating, location } = props
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const user = useSelector((state: any) => state.auth);
  const [userRating, setUserRating] = React.useState<number | null>();

  const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  

  
  const handleBtnClick = async () => {    
    await postDataAPI('events/setrating', {
      username: user.user.username,
      eventName: title,
      rating: userRating
    })
    .then(res => {          
      setOpen(!open);
      setOpenSnackbar(!openSnackbar);  
    })
    .catch(err => console.log(err))

  };

  
  return (
    <>
    <Snackbar 
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={() => setOpenSnackbar(!openSnackbar)}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }
    }>
      <Alert onClose={() => setOpenSnackbar(!openSnackbar)} severity="success" sx={{ width: '100%' }}>
        Successfully rated event!
      </Alert>
    </Snackbar>

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
          boxShadow: 24,
          p: 4,
          borderRadius: 10,
        }
      } 
      >
      <Typography id="modal-modal-title" variant="h6" component="h2">
          Did you enjoy the activity {title}?
      </Typography>
      <Rating 
        name="customized-10"
        onChange = {(event, newValue) => {
          if (newValue) setUserRating(newValue-1);
        }}
        defaultValue={5} max={10} 
      />
        <Button onClick={handleBtnClick} variant="contained" sx={{
          backgroundColor: "#3f51b5",
          display: "flex",
          marginTop: 2,
        }}>Rate Event!</Button>  
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
          <Typography variant="h5" color="text.primary">
            Rating: {rating}
          </Typography>
        <Typography variant="body1" color="text.secondary">
            {location}
        </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}

export default RateCard;