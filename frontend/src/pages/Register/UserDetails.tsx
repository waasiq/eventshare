import React, { useContext } from "react";
//GENERAL
import { TextField, Grid } from "@mui/material/";

interface IUserDetails {
    user: any, 
    errors: any,
}

const UserDetails = function () {  
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);

  return (
    <Grid container spacing={2}>
            <Grid item xs={12}>
        <TextField
          placeholder='Type your full name here'
          name='name'
          label='Full name'
          //value={user.username}
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder='Type your username here'
          name='username'
          label='Username'
          //value={user.username}
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder='Type your email here'
          name='email'
          label='Email'
          //value={user.email}
          type='email'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          required
          fullWidth
        />
      </Grid>
      {/* <Grid item xs={12}>
        <TextField
          type='date'
          name='birthdate'
          id='birthdate'
          label='Birthdate'
          //defaultValue={user.birthdate}
          helperText='You need to be at least 18 years old'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10)
          }}
          //error={!!errors["birthdate"]}
          required
          fullWidth
        />
      </Grid> */}

      <Grid item xs={12} lg={6}>
        <TextField
          placeholder='Type your password here'
          name='password'
          label='Password'
          //value={user.password}
          type='password'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 6,
            maxLength: 20
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <TextField
          placeholder='Re-type your password here'
          label='Password'
          name='password2'
          //value={user.confirmPassword}
          type='password'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          //error={!!errors["confirmPassword"]}
          inputProps={{
            minLength: 6,
            maxLength: 20
          }}
          required
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default UserDetails;