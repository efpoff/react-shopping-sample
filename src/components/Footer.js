import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-blue pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
            <p>You can contact us at havefunshopping@react-store.com.</p>
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">
              The Have Fun Shopping React Store
            </h5>
            <p>Built with React, Bootstrap, and CSS.</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        All Rights Reserved, © 2023
        <span> The Have Fun Shopping React Store</span>
      </div>
    </footer>
  );
};

export default Footer;
