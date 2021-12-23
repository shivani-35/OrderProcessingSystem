import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';

export default function CustomDateTimePicker() {
    const [clearedDate, setClearedDate] = React.useState(null);
    const [value, setValue] = React.useState(new Date('2019-01-01T18:54'));

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>

                <DateTimePicker
                    clearable
                    value={clearedDate}
                    onChange={(newValue) => setClearedDate(newValue)}
                    renderInput={(params) => (
                        <TextField {...params} helperText="Pls click the icon to choose the exact time." />
                    )}
                />
            </Stack>
        </LocalizationProvider>
    )
}