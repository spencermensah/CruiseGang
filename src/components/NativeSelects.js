import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    size: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.value);
    setState({
      size: event.target.value,
    });
  };

  return (
    <div>

        <FormControl variant="outlined" className={classes.formControl} style={{width: "100%"}}>
          <ThemeProvider theme={theme}>
          <Select
            native
            value={state.age}
            onChange={props.handleOptionChange}
            inputProps={{
              size: 'S'
            }}
          >

            {props.option.values.map((value) => {
              if (props.option.values["0"]["value"]=="SOLD OUT") {
                return (
                  <option disabled value={value}>{`${value}`}</option>
                )
              } else {
                return (
                  <option value={value}>{`${value}`}</option>
                )
              }
            })}
          </Select>
          </ThemeProvider>
        </FormControl>

    </div>
  );
}
