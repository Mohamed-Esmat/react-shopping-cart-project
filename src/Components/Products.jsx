import React, { Component } from 'react';
import data from '../store.js';
export default class Products extends Component {
  render() {
    return (
      <>
        <div className="row text-center mt-5 pt-5 handel-img">
          {data.map((value, index) => {
            return (
              <div key={value.id} className="col-md-4 my-3" >
                <div>
                  <div className="item overflow-hidden">
                    <img className="" src={value.image} alt="" />
                  </div>
                  <div className="item-title">
                    <h6 className="cart-title my-4">{value.title}</h6>
                    <span>${value.price}</span>
                  </div>
                  <button onClick={()=>{
                    this.props.addItem(value)
                  }} className="btn mainColor text-white mt-3 w-100">
                    Add to Cart
                  </button>
                </div>




              </div>
            );
          })}
        </div>
      </>
    );
  }
}
