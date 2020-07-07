import 'moment';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';


const DatePickerEdit = ({ id, currentDeadline }) => {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(currentDeadline? currentDeadline: Date.now());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(selectedDate)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker 
          variant="inline"
          format="DD-MM-YYYY"
          margin="normal"
          id={id}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePickerEdit