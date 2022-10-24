import React, { useContext, Fragment } from "react";
import { Typography, Grid, Checkbox, FormControlLabel } from "@mui/material";
const useStyles = {
  summary: {
    padding: 10,
    border: "1px solid #ddd",
    marginBottom: 10
  }
}

const UserSummary: React.FC = function ()  {
  return (
    <Fragment>
      <Grid container sx={useStyles.summary}>
        <Grid item xs={12}>
          <Typography variant='h4'>Summary</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6'>Username</Typography>
          {/* <Typography variant='body2'>{username}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Email</Typography>
          {/* <Typography variant='body2'>{email}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Birthdate</Typography>
          {/* <Typography variant='body2'>{birthdate}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Bio</Typography>
          {/* <Typography variant='body2'>{bio || "-"}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Website</Typography>
          {/* <Typography variant='body2'>{website || "-"}</Typography> */}
        </Grid>
      </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.user.acceptTerms}
                required
                color='primary'
                name='acceptTerms'
              />
            }
            label='I accept terms and conditions'
          />
        </Grid>
    </Fragment>
  );
};

export default UserSummary;