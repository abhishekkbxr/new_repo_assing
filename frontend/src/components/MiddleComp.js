"use client"
import React from 'react'
import { Container, Divider, Avatar, Box, Button, Typography, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function MiddleComp() {
  return (
    <Box sx={{ display:{ sx:'block', md:'flex'} , width: "100%", mt: 4, justifyContent: "space-between" }}>
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ mx: 2 }} />
        <Box>
          <Typography varient="h6">sunny kumar</Typography>
          <Link href="#">kelly.com/sunnyfriend2012</Link>
        </Box>
      </Box>
      <Box>
        <Button startIcon={<AddIcon />} variant="contained" sx={{ mt:1,  borderRadius: "4rem" }}>create</Button>
      </Box>
    </Box>
  )
}

export default MiddleComp
