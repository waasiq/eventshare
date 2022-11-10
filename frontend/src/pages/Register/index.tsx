import React, { Fragment, useState } from "react";
import UserPreferences from "./UserPrefrences";
import UserDetails from "./UserDetails";
import UserSummary from "./UserSummary";
import indexStyle from "./styles/indexStyle";
import { 
    Box, Typography, Snackbar, 
    SnackbarContent, Stepper, Step,
    StepLabel, StepContent , Button
} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/authActions';
import { useNavigate } from "react-router-dom";


const Index: React.FC =  function () {
  const [activeStep, setActiveStep] = useState(0);
  const [errors] = useState({});
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const steps = ["Basic information", "User details", "Summary"];

  const initialState = {
    username: "",
    name: "",
    email: "",
    password: "",
    password2: "",
    // birthdate: "",
    gender: "Male",
  }

  const [userData, setUserData] = useState(initialState);
  const { username, email, password, password2, gender } = userData;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const isStepOptional = (step:any)  => {
    return step === 1;
  };

  const getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return <UserDetails />;
      case 1:
        return <UserPreferences />;
      case 2:
        return <UserSummary />;
      default:
        return "Unknown step";
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (password !== password2) {
      dispatch({
        type: 'NOTIFY',
        payload: { error: 'Password do not match' } 
      });
    } else {
      if (activeStep < steps.length - 1) handleNext();
      else {
        dispatch(register(userData));
        navigate('/home');
      }
    }
  };

  const handleError = (e: any) => {
    setOpen(true);
  };

  const handleChange = (e:any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>      
        <Box sx={indexStyle.root}>
          <Typography variant='h5'>
            Registration
          </Typography>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => {
              const labelProps = {};
              if (isStepOptional(index)) {
                // labelProps.optional = (
                //   <Typography variant='caption'>Optional</Typography>
                // );
              }
              return (
                <Step key={index}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  <StepContent>
                    <form
                      onSubmit={handleSubmit}
                      onInvalid={handleError}
                      onChange={handleChange}
                      style={indexStyle.content}
                    >
                      {getStepContent(activeStep)}
                      <Box sx={indexStyle.buttonsContainer}>
                        <Button
                          disabled={activeStep === 0}
                          sx={indexStyle.button}
                          variant='contained'
                          onClick={handleBack}
                        >
                          Back
                        </Button>
                        {activeStep < steps.length - 1 && (
                          <Button
                            type='submit'
                            sx={indexStyle.button}
                            variant='contained'
                            color='primary'
                          >
                            Next
                          </Button>
                        )}
                        {activeStep === steps.length - 1 && (
                          <Button
                            type='submit'
                            sx={indexStyle.button}
                            variant='contained'
                            color='primary'
                          >
                            Submit
                          </Button>
                        )}
                      </Box>
                    </form>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        resumeHideDuration={3000}
        autoHideDuration={3000}
        open={open}
      >
        <SnackbarContent
          message={
            <Box sx={indexStyle.message}>
              <ErrorIcon sx={indexStyle.icon} />
              {"Please correct the data"}
            </Box>
          }
        />
      </Snackbar>
    </Fragment>
  );
};

export default Index;