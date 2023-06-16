import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '40px 0',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ mb: 2 }}>
        © 2023 Meetup. All rights reserved.
      </Typography>
      <Link href="/terms" color="inherit" sx={{ marginRight: 2 }}>
        Terms of Service
      </Link>
      <Link href="/privacy" color="inherit">
        Privacy Policy
      </Link>
    </Box>
  );
};

export default Footer;