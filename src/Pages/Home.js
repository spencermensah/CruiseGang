import React, { Component } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Client from 'shopify-buy';

import DialogContentText from '@material-ui/core/DialogContentText';
import FadeIn from 'react-fade-in';


import ballseye from './assests/logo/ballseye.png';
import double from './assests/logo/double.png';
import flame from './assests/logo/flame.png';
import bigLogo from './cgbkgrd.gif';

const client = Client.buildClient({
  storefrontAccessToken: '17863866dc94c90d15e8f1ea1a96d80f',
  domain: 'cruisegang.myshopify.com'
});

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    var basketSize = this.state.checkout.lineItems.length;

    return (
      <div>
        <img className="biglogo" src={bigLogo} alt="loading..." />

          <div className="App">


              {!this.state.isCartOpen &&
                <div className="App__view-cart-wrapper">
                  <button className="App__view-cart" onClick={()=> this.setState({isCartOpen: true})}>{basketSize}</button>
                </div>
              }

            <div>
              <img className="ballseye" src={ballseye} alt="loading..." />
            </div>





            <Products
              products={this.state.products}
              client={client}
              addVariantToCart={this.addVariantToCart}
            />

            <Cart
              checkout={this.state.checkout}
              isCartOpen={this.state.isCartOpen}
              handleCartClose={this.handleCartClose}
              updateQuantityInCart={this.updateQuantityInCart}
              removeLineItemInCart={this.removeLineItemInCart}
            />

          <DialogContentText id="alert-dialog-description">© 2020, Cruise Gang</DialogContentText>


          </div>
      </div>
    );
  }
}

export default Home;
