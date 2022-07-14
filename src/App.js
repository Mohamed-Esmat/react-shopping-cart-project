import React, { Component } from 'react';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './Components/NotFound';

export default class App extends Component {
  state = { cartItems: [] };
componentDidMount(){
  let data = JSON.parse(localStorage.getItem("data"));
  if(data!=null){
    this.setState({cartItems:data})
  }
}


  addTotalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  addItem = (item) => {
    let exist = this.state.cartItems.find((element) => element.id === item.id);
    if (exist) {
      let cart = this.state.cartItems.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm
      );
      // let cart =  [...this.state.cartItems ,{...exist,qty:exist.qty+1}]
      this.setState({ cartItems: cart });
      this.addTotalStorage(cart);
    } else {
      let cart = [...this.state.cartItems, { ...item, qty: 1 }];
      this.setState({ cartItems: cart });
      this.addTotalStorage(cart);
    }
  };
  decrementItem = (item) => {
    let exist = this.state.cartItems.find((element) => element.id === item.id);
    if (exist.qty > 1) {
      let cart = this.state.cartItems.map((elm) =>
        elm.id === item.id ? { ...exist, qty: exist.qty - 1 } : elm
      );
      this.setState({ cartItems: cart });
      this.addTotalStorage(cart);
    }
  };
  removeProduct = (item) => {
    let cart = this.state.cartItems.filter((element) => element.id !== item.id);
    this.setState({ cartItems: cart });
    this.addTotalStorage(cart);
  };
  render() {
    let totalQty = this.state.cartItems.reduce((x, y) => x + y.qty, 0);
    let totalPrice = this.state.cartItems
      .reduce((x, y) => x + y.qty * y.price, 0)
      .toFixed(3);
    return (
      <>
        <Navbar totalPrice={totalPrice} totalQty={totalQty} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <Products addItem={this.addItem} />
            </div>
            <div className="col-md-3">
              <Cart
                removeProduct={this.removeProduct}
                decrementItem={this.decrementItem}
                addItem={this.addItem}
                cartItems={this.state.cartItems}
              />
            </div>
          </div>
        </div>
        {/* <Routes>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Navigate replace to="/products"/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}
      </>
    );
  }
}
