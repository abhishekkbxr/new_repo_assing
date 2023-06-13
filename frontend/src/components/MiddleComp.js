"use client"
import React from 'react'
import { Container,Divider, Avatar, Box, Button, Typography, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function MiddleComp() {
  return (
    <Box sx={{ display: "flex",width:"100%",mt:4 ,justifyContent:"space-between"}}>
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Avatar sx={{ mx: 2 }} />
        <Box>
          <Typography varient="h6">sunny kumar</Typography>
          <Link href="#">kelly.com/sunnyfriend2012</Link>
        </Box>
      </Box>
      <Box>
      <Button startIcon={<AddIcon/>} variant="contained" sx={{px:2,py:1,borderRadius:"4rem"}}>Create</Button>
      
      </Box>
    </Box>
  )
}

export default MiddleComp
