"use client";
import * as React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Temp({ day }) {
  const [data, setData] = React.useState([{ start: "", end: "" }]);

  const handleClick = () => {
    setData([...data, { start: "", end: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const changeVal = [...data];
    changeVal[i][name] = value;
    setData(changeVal);
  };

  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };

  return (
    <Container sx={{ display: "flex", my: 3, width: "50%" }}>
      <Box sx={{ justifyContent: "center", mx: 2, display: "flex" }}>
        <Box sx={{ mt: 3 }}>
          <Typography textAlign="center" padding="5px 0px">
            {day}
          </Typography>
          <Button variant="contained" sx={{ my: 2 }} onClick={handleClick}>
            Add
          </Button>
          {data.map((val, i) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 1,
                p: 0,
                "& input": { padding: 0 },
              }}
            >
              <TextField
                name="start"
                type="time"
                defaultValue={val.start}
                onChange={(e) => handleChange(e, i)}
                sx={{ mx: 1, p: 0 }}
              />

              <TextField
                name="end"
                type="time"
                defaultValue={val.end}
                onChange={(e) => handleChange(e, i)}
                sx={{ p: 0 }}
              />

              <Button
                variant="contained"
                sx={{height: "28px", mx: 1 }}
                onClick={() => handleDelete(i)}
              >
                X
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography marginTop="140px">{JSON.stringify(data)}</Typography>
      </Box>
    </Container>
  );
}
