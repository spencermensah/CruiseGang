import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DialogContentText from '@material-ui/core/DialogContentText';

import { ButtonBack, ButtonFirst, ButtonLast, ButtonNext, CarouselProvider, DotGroup, ImageWithZoom, Slide, Slider, } from 'pure-react-carousel';
import s from './style.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';


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
      <Paper className={classes.paper}>
      <DialogContentText id="alert-dialog-description">{props.product.description}</DialogContentText>
      <DialogContentText id="alert-dialog-description" class="refunds">No Refunds Unless Item Is Damaged</DialogContentText>
      </Paper>
      <Paper className={classes.paper}>
           <CarouselProvider
              visibleSlides={1}
              totalSlides={props.product.images.length}
              step={1}
              naturalSlideWidth={400}
              naturalSlideHeight={500}
              hasMasterSpinner
              infinite
            >
              <Slider className={s.slider}>
                {props.product.images.map((text, index) => (
                  <Slide index={2}>
                    <ImageWithZoom src={text.src} />
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
      </Paper>
      <Paper className={classes.paper}>
        <DialogContentText id="alert-dialog-description">£{props.product.variants[0].price}</DialogContentText>
      </Paper>

    </div>
  );
}
