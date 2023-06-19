import React, { useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { postDataAPI } from '../../../utils/fetchApi';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  rating: number;
  location: string;
}

const RateCard: React.FC<Props> = function (props: Props) {
  const { title, image, rating, location } = props;
  {console.log(image)}
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const user = useSelector((state: any) => state.auth);
  const [userRating, setUserRating] = useState<number | null>();

  const handleBtnClick = async () => {
    await postDataAPI('events/setrating', {
      username: user.user.username,
      eventName: title,
      rating: userRating,
    })
      .then((res) => {
        setOpen(!open);
        setOpenSnackbar(!openSnackbar);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(!openSnackbar)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(!openSnackbar)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Successfully rated event!
        </Alert>
      </Snackbar>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white shadow p-6 rounded-lg"
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center font-bold text-xl"
          >
            Did you enjoy the activity {title}?
          </Typography>
          <Rating
            name="customized-10"
            onChange={(event, newValue) => {
              if (newValue) setUserRating(newValue - 1);
            }}
            defaultValue={5}
            max={10}
            className="mt-4"
          />
          <Button
            onClick={handleBtnClick}
            variant="contained"
            className="mt-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Rate Event!
          </Button>
        </Box>
      </Modal>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card 
        onClick={() => setOpen(!open)} sx={{ minHeight: '200px' }}>
          <CardActionArea>
            <img
              height="160"
              src={image || "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"}
              alt="Placeholder"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png";
              }}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="div">
                {(title)}
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
      </motion.div>
    </React.Fragment>
  );
};

export default RateCard;
