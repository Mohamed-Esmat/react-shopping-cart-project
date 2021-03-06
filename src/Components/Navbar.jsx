import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark mainColor py-3">
          <div className="container">
            <NavLink className="navbar-brand" to="#">
              StoreApp
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item text-white cart position-relative">
                  
                  <span>${this.props.totalPrice}</span>
                  <span>
                    Cart <i className="fas fa-shopping-cart"></i>
                  </span>
                  <span className="badge badge-info cart-badge">
                    {this.props.totalQty}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
