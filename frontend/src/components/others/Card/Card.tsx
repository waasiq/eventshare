import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { postDataAPI } from '../../../utils/fetchApi';
import { useSelector } from 'react-redux';
import CardSnack from './CardSnack';

interface Props {
  title: string;
  description: string;
  image: string;
  link?: string;
  location?: string;
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
      <CardSnack 
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar} 
        open={open}
        setOpen={setOpen}
        handleBtnClick={handleBtnClick}
        title={title}
      />

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
