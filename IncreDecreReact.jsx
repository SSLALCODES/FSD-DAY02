import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[c,setCount]=useState(0)
    const iValue=()=>{
        setCount(c+1)
    }
    const dValue=()=>{
        setCount(c-1)
        if(c==0){
            setCount(0)
        }
        
    }
  return (
    <div>
        <Typography><b>The current count is..{c}</b></Typography>
        <Button variant='contained' color='success' onClick={iValue}>
            <b>+</b>
        </Button>&nbsp;&nbsp;
        <Button variant='contained' color='error' onClick={dValue}>
            <b>+</b>
        </Button>
    </div>
  )
}

export default Counter