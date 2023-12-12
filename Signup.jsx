import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h2'><b>SIGN UP</b></Typography><br />
        <TextField variant='standard' label="Enter your name"></TextField><br />
        <TextField variant='standard' label="Enter your place"></TextField><br />
        <TextField variant='standard' label="Enter your Email id"></TextField><br />
        <button variant="contained"><b>SUBMIT</b></button>
    </div>
  )
}

export default Signup