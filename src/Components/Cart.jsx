import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
  
    return (
      <>
        <div className="">
          <h2 className="cart-items my-5 pt-5">Cart Items</h2>
          {this.props.cartItems.length===0?<h5>Cart is empty</h5>: ''}
          {this.props.cartItems.map((value, index) => {
            return (
              <div key={value.id}>
                <div  className="cart-item overflow-hidden d-flex ">
                  <div className="cart-item-img  ">
                    <img
                      className="w-100"
                      src={value.image}
                      alt=""
                    />
                  </div>
                  <div className="cart-item-img-detail ml-4">
                    <h6>{value.title}</h6>
                    <p className="price">${value.price}</p>
                    <button onClick={()=>{
                      this.props.decrementItem(value)
                    }} className="btn  btn-danger">-</button>
                    <span className="px-3">{value.qty}</span>
                    <button onClick={()=>{
                      this.props.addItem(value)
                    }} className="btn  btn-info mr-3">+</button>
                    <button onClick={()=>{
                      this.props.removeProduct(value)
                    }} className="btn  btn-danger">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
