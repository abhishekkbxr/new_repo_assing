"use client"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function BasicCard({ theam }) {
  return (
    <Card variant="outlined" sx={{ width: 360, mt: 2, pt: 4, borderTop: 4, borderColor: `${theam}` }}>
      <div>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          New Meeting
        </Typography>
        <Typography level="body2" mt={2}>30 Minutes for <br /> project discussion</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        >
          <SettingsIcon />
        </IconButton>
      </div>

      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
        }}
      // onClick={preventDefault}
      >
        <Link href="#" underline="none">View Booking Page</Link>
      </Box>
      <Divider />
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Button variant="text" sx={{p:1}} >
            <ContentCopyIcon style={{ fill: '#0072ea'}}/>
            <Link href="#" underline="none"sx={{ml:1}} >Copy Link</Link>
          </Button>
          <Button variant="outlined"  sx={{ borderRadius: "2rem" }} >share</Button>
        </Stack>
      </Box>

    </Card>
  );
}