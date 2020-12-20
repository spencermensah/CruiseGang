import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DisplayGrid from './DisplayGrid';
import Slide from '@material-ui/core/Slide';

import VariantSelector from '../VariantSelector';

const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class AlertDialog extends React.Component {
  constructor(props) {
      super(props);

      let defaultOptionValues = {};
      this.props.product.options.forEach((selector) => {
        defaultOptionValues[selector.name] = selector.values[0].value;
      });

      this.state = {
        open: false,
        selectedOptions: defaultOptionValues
      };
      this.handleOptionChange = this.handleOptionChange.bind(this);
}
      handleClickOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

      addItemtoCart = () => {
        let variant = this.state.selectedVariant || this.props.product.variants[0]
        let variantQuantity = 1
        this.setState({ open: false });
        this.props.addVariantToCart(variant.id, variantQuantity)
        this.setState({
          selectedVariant: this.props.product.variants[0]
        });
      };

      handleOptionChange(event) {
        const target = event.target
        let selectedOptions = this.state.selectedOptions;
        selectedOptions[target.name] = target.value;
        const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)
        this.setState({
          selectedVariant: selectedVariant,
          selectedVariantImage: selectedVariant.attrs.image
        });
      }

      render() {
        let variantSelectors = this.props.product.options.map((option) => {
          return (
            <VariantSelector
              handleOptionChange={this.handleOptionChange}
              key={option.id.toString()}
              option={option}
              product={this.props.product}
            />
          );
        });

        const { classes } = this.props;

          return (
            <div>
              <img onClick={this.handleClickOpen} className="Product__image" src={this.props.product.images[0].src} alt={`${this.props.product.title} product shot`}/>
              <DialogContentText id="alert-dialog-description">{this.props.product.title}</DialogContentText>
              <DialogContentText id="alert-dialog-description">£{this.props.product.variants[0].price}</DialogContentText>
              <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                TransitionComponent={Transition}
              >
              <AppBar className={classes.appBar}>
                <Toolbar>
                    <Button edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                      Close
                    </Button>
                  <Typography variant="h6" className={classes.title}>
                    {this.props.product.title}
                  </Typography>
                  <Button color="inherit" onClick={this.addItemtoCart}>
                    Add To Cart
                  </Button>
                </Toolbar>
              </AppBar>
                <DialogContent>

                <DisplayGrid
                  product = {this.props.product}
                  />
                  {variantSelectors}

                </DialogContent>

              </Dialog>
            </div>
          );
        }
      }


export default withStyles(styles)(AlertDialog);
