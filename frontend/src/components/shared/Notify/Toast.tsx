import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ToastProps {
  severity: 'success' | 'error' | 'info' | 'warning';
  message: string;
  open: boolean;
}

export default function Toast(props: ToastProps) {
  const { severity, message, open } = props;

  const [openToast, setOpenToast] = useState(open);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  useEffect (() => {
    setOpenToast(open);
  }, [open]);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={openToast} 
        anchorOrigin ={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={handleClose}
       >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}