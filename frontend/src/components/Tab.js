"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "./Card";
import { Stack } from "@mui/material";
import Container from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "#bbf2e0",
          borderRadius: 5,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="none"
          sx={{
            "& button": { color: "black" },
            "& button.Mui-selected": {
              background: "#57d46e",
              borderRadius: 8,
              borderRight: 3,
              borderColor: "white",
              color: "white",
            },
          }}
        >
          <Tab label="Recent Events" {...a11yProps(0)} />
          <Tab label="Shaduled Events" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} 
        sx={{
          "& div.css-19kzrtu":{padding:"18px 0px"},
          
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ flexWrap: "wrap" }}
        >
          <Card theam={`#1ec404`} />
          <Card theam={`#edb50c`} />
          <Card theam={`#04c4c4`} />
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
