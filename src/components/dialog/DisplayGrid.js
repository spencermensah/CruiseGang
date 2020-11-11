import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DialogContentText from '@material-ui/core/DialogContentText';

import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
}));

export default function DisplayGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Magnifier
              imageSrc={props.product.images[0].src}
              imageAlt={`${props.product.title} product shot`}
              largeImageSrc={props.product.images[0].src}
      mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
      touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
    />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <DialogContentText id="alert-dialog-description">{props.product.title}</DialogContentText>
          <DialogContentText id="alert-dialog-description">{props.product.description}</DialogContentText>
          <DialogContentText id="alert-dialog-description">£{props.product.variants[0].price}</DialogContentText>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
