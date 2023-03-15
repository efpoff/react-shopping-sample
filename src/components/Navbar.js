import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light p-4">
      <a href="/" className="navbar-brand">
        React Store
      </a>
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={() => props.show()}
      >
        Cart {props.cart.length > 0 ? props.cart.length : null}
      </button>
    </nav>
  );
};

export default Navbar;
