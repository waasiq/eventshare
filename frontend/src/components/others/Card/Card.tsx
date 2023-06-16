import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Modal,
  Typography,
  Button,
  Snackbar,
  Alert,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@mui/material';
import { postDataAPI } from '../../../utils/fetchApi';
import { useSelector } from 'react-redux';

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  location: string;
}

const CardC: React.FC<Props> = (props: Props) => {
  const user = useSelector((state: any) => state.auth);
  const { title, description, image, link, location } = props;
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const parseTitle = (title: string) => {
    if (title.length > 30) {
      return title.slice(0, 30) + '...';
    } else {
      return title;
    }
  };

  const parseDescription = (description: string) => {
    if (description.length > 20) {
      return description.slice(0, 20) + '...';
    } else {
      return description;
    }
  };

  const handleBtnClick = async () => {
    try {
      await postDataAPI('events/register', {
        username: user.user.username,
        eventName: title,
        eventLink: link,
        location: location,
        imgLink: image,
      });
      setOpen(false);
      setOpenSnackbar(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Successfully registered
        </Alert>
      </Snackbar>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
          onClick={handleBtnClick}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to go to {title}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Click on the button below to go to the event page.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>Go to event</Button>
        </Box>
      </Modal>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card onClick={() => setOpen(true)} sx={{ minHeight: '200px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={image ? image : "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"}
              alt="Placeholder"
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h5" component="div">
                {parseTitle(title)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {parseDescription(description)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </React.Fragment>
  );
};

export default CardC;
