import React, { Component } from 'react';
import Product from './Product';
import ReactPlayer from "react-player"

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
          <ReactPlayer
            url="https://www.youtube.com/watch?v=43sM_Q5wMVY"
            muted={true}
            playing={true}
            width='100%'
            height='100%'
          />
        </div>



        {products}
      </div>
    );
  }
}

export default Products;
