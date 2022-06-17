import React from "react";
import "./Shipping.css";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <div>
      <div className="headee">
        <p className="cart-txt">Shipping</p>
      </div>

      <div className="bodee">
        <p className="greetings">Input shipping address below</p>

        <div className="major-info">
          <p className="details">First name *</p>
          <input className="details-input" type="text" />
        </div>

        <div className="major-info">
          <p className="details">Last name *</p>
          <input className="details-input" type="text" />
        </div>

        <div className="major-info">
          <p className="details" style={{ width: "103px" }}>
            Street Address *
          </p>
          <input className="details-input" type="text" />
        </div>

        <div className="minor-info">
          <div>
            <p className="minor-details">Apt or unit (optional)</p>
            <input className="minor-input" type="text" />
          </div>

          <div>
            <p className="minor-details">City *</p>
            <input className="minor-input" type="text" />
          </div>
        </div>

        <div className="minor-info">
          <div>
            <p className="minor-details">State *</p>
            <input className="minor-input" type="text" />
          </div>

          <div>
            <p className="minor-details">Zip code *</p>
            <input className="minor-input" type="text" />
          </div>
        </div>

        <div className="major-info">
          <p className="details">Phone number *</p>
          <input className="details-input" type="text" />
        </div>

        <p className="additional-txt">
          We'll contact you in case anything comes up with your order.
        </p>

        <Link to="/invoice">
        <button className="proceed">Save</button>
        </Link>
      </div>
    </div>
  );
};

export default Shipping;
