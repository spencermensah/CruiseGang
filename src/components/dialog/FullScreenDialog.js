import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DisplayGrid from './DisplayGrid';

import VariantSelector from '../VariantSelector';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  let defaultOptionValues = {};

  props.product.options.forEach((selector) => {
    defaultOptionValues[selector.name] = selector.values[0].value;
  });

  const [selectedOptions, setSelectedOptions] = React.useState(defaultOptionValues);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addItemtoCart = () => {
    let variant = this.state.selectedVariant || props.product.variants[0]
    let variantQuantity = 1
    setOpen(false);
    props.addVariantToCart(variant.id, variantQuantity)
    this.setState({
      selectedVariant: props.product.variants[0]
    });
  };

  const handleOptionChange = (event) => {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;
    const selectedVariant = props.client.product.helpers.variantForOptions(props.product, selectedOptions)
    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  let variantSelectors = props.product.options.map((option) => {
    return (
      <VariantSelector
        handleOptionChange={handleOptionChange}
        key={option.id.toString()}
        option={option}
      />
    );
  });

  return (
    <div>
      <img onClick={handleClickOpen} className="Product__image" src={props.product.images[0].src} alt={`${props.product.title} product shot`}/>
      <DialogContentText id="alert-dialog-description">{props.product.title}</DialogContentText>
      <DialogContentText id="alert-dialog-description">£{props.product.variants[0].price}</DialogContentText>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
              <Button edge="start" color="inherit" onClick={handleClose} aria-label="close">
                Close
              </Button>
            <Typography variant="h6" className={classes.title}>
              {props.product.title}
            </Typography>
            <Button color="inherit" onClick={addItemtoCart}>
              Add To Cart
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
        <DisplayGrid
          product = {props.product}
          />
          {variantSelectors}
          <button className="Product__buy button" onClick={addItemtoCart}>Add to Cart</button>

        </DialogContent>
      </Dialog>
    </div>
  );
}
