"use client"
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Box, Button, Typography } from '@mui/material';

export default function TimePickerValue() {
    const [time, setTime] = React.useState([{start:"" , end:""}]);

    const handleClick = ()=>{
        setTime([...time,{start:"",end:""}]);
        console.log("running")
    }




    console.log()

    return (
        <Box sx={{ display: 'flex', justifyContent: "center", height: "100vh" }}>
            <Box sx={{ mt: 9 }}>
                <Typography textAlign="center" padding="5px 0px">MON</Typography>
                <Button variant="contained" sx={{ my: 2 }} onClick={handleClick} >Add</Button>

                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker', 'TimePicker']}>
                            <TimePicker
                                label="Basic time picker"
                                // value={start}
                                // onChange={(newValue) => setStart(newValue)}
                            />
                            <TimePicker
                                label="Basic time picker"
                                // value={end}
                                // onChange={(newValue) => setEnd(newValue)}
                                sx={{ p: 0 }}
                            />
                            <Button variant="contained" sx={{ my: 2 }} >X</Button>
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
            </Box>
        </Box>
    );
}