"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './Card'
import { Stack } from '@mui/material';
import Container from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '90%', mt: "50px", p: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: "#b6d7a8 ", borderRadius: 5 }}>

        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Recent Events" {...a11yProps(0)} />
          <Tab label="Shaduled Events" {...a11yProps(1)} />

        </Tabs>
      </Box>

        <TabPanel value={value} index={0} sx={{ ml: "50px"}} >
          <Stack direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}} >
            <Card />
            <Card />
            <Card />
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      

    </Box>
  );
}