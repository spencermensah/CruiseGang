import React, { Component } from 'react';
import Product from './Product';
import ReactPlayer from "react-player"
import DialogContentText from '@material-ui/core/DialogContentText';


class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <div>

          <Product
            addVariantToCart={this.props.addVariantToCart}
            client={this.props.client}
            key={product.id.toString()}
            product={product}
          />
        <br></br>
        </div>

      );
    });

    return (
      <div className="Product-wrapper">



        <DialogContentText id="alert-dialog-description" class="refunds">No Refunds</DialogContentText>
        {products}
      </div>
    );
  }
}

export default Products;
