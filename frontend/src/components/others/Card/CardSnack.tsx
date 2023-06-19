import React from 'react';
import { Snackbar, Alert, Modal, Box, Typography, Button } from '@mui/material';

interface Props {
    openSnackbar: boolean;
    setOpenSnackbar: (open: boolean) => void;
    open : boolean;
    setOpen : (open: boolean) => void;
    title : string;
    handleBtnClick : () => void;
}

const CardSnack: React.FC<Props> = (props) => {
    const { openSnackbar, setOpenSnackbar, open, setOpen, title, handleBtnClick } = props;

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
       </React.Fragment>
    )
};

export default CardSnack;