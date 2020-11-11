import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DisplayGrid from './DisplayGrid';

import VariantSelector from '../VariantSelector';


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
            />
          );
        });

          return (
            <div>
              <img onClick={this.handleClickOpen} className="Product__image" src={this.props.product.images[0].src} alt={`${this.props.product.title} product shot`}/>
              <DialogContentText id="alert-dialog-description">{this.props.product.title}</DialogContentText>
              <DialogContentText id="alert-dialog-description">£{this.props.product.variants[0].price}</DialogContentText>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>





                <DisplayGrid
                  product = {this.props.product}
                  />


                  {variantSelectors}
                  <button className="Product__buy button" onClick={this.addItemtoCart}>Add to Cart</button>

                </DialogContent>

              </Dialog>
            </div>
          );
        }
      }


export default AlertDialog;
