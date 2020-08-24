import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height: "300px"
  },
}));

export default function SplashGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <a href="http://localhost:3000/#/Home"><img class="gifIcon" src={require('./slashgif1.gif')} /></a>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <a href="http://localhost:3000/#/Home"><img class="gifIcon" src={require('./slashgif2.gif')} /></a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
