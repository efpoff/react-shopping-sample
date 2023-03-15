import React from "react";
const Product = (props) => {
  return (
    <div className="col-lg-4 d-flex align-items-stretch justify-content-center mb-2">
      <div className="card" style={{ width: "18.75rem" }}>
        <img
          src={props.product.image.url}
          className="card-img-top"
          alt={props.product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <p className="card-title">{props.product.description}</p>
          <p className="text-muted">${props.product.price}</p>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => props.addItem(props.product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
// Compare this snippet from src\components\Cart.js:
