import React, { Component } from 'react';
import Product from './Product';
import ReactPlayer from "react-player"
import logo from './cgbkgrd.gif'

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
        <div className='player-wrapper'>
          <img src={logo} alt="loading..." />
        </div>



        {products}
      </div>
    );
  }
}

export default Products;
