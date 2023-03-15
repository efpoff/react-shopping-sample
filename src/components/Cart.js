import React from "react";

const Cart = ({ handleClose, show, items }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="main-modal">
        <div className="d-flex justify-content-center mb-2">
          {items.map((item) => (
            <div className="card m-1" style={{ width: "18rem" }}>
              <img
                src={item.image.url}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-title">${item.price}</h6>
              </div>
            </div>
          ))}
        </div>
        <p>Total items: {items.length}</p>
        <button className="btn btn-warning ml-2" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Cart;
