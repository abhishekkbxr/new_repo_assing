"use client";
import * as React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function TimePickerValue() {
  const [data, setData] = React.useState([{ start: "", end: "" }]);

  const handleClick = () => {
    setData([...data, { start: "", end: "" }]);
    console.log("running");
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
    <Container sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ justifyContent: "center" }}>
        <Box sx={{ mt: 9 }}>
          <Typography textAlign="center" padding="5px 0px">
            MON
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
              }}
            >
              <TextField
                name="start"
                type="time"
                defaultValue={val.start}
                onChange={(e) => handleChange(e, i)}
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
                sx={{ width: "10px", height: "30px", mx: 2 }}
                onClick={() => handleDelete(i)}
              >
                X
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Typography marginLeft="75px" marginTop="200px">
        {JSON.stringify(data)}
      </Typography>
    </Container>
  );
}
