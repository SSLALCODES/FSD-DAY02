import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Login = () => {
  return (
    <div>
      <Typography variant='h3'>Hello Word</Typography>
      <TextField label="Username" variant='outlined'/><br />
      <Button>SUBMIT</Button>
    </div>
  );
};

export default Login;
