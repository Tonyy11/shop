import React from "react";
import { useState, useEffect } from "react";
import "./DeliveryPayment.css";
import visa from "../Assets/visa.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeliveryPayment = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const url = `https://giftshop12.herokuapp.com/credit-card`;
  const [data, setData] = useState({
    card_name: "",
    card_number: "",
    expiry_date: "",
    security_code: "",
    first_name: "",
    last_name: "",
    street_Address: "",
    apt: "",
    city: "",
    state: "",
    zip_code: "",
    phone_number: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, {
      card_name: data.card_name,
      card_number: data.card_number,
      expiry_date: data.expiry_date,
      security_code: data.security_code,
      first_name: data.first_name,
      last_name: data.last_name,
      street_address: data.street_address,
      apt: data.apt,
      city: data.city,
      state: data.state,
      zip_Code: data.zip_code,
      phone_number: data.phone_number,
    });
    console.log(response);
    if (response.statusText === "Created") {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/deliveryerror");
    }
  },[isSubmitted, navigate]);


  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <div className="headee">
        <p className="cart-txt">Delivery Payment</p>
      </div>

      <div className="bodee">
        <p className="greetings">Choose a payment method</p>
        <p className="greetings-txt">
          You will not be charged until you review this order on the next page.
        </p>

        <div className="cardtype">
          <div className="left">
            <div className="radio-container">
              <input type="checkbox" id="rd1" required />
              <label htmlFor="rd1">Credit card / Debit card</label>
            </div>
          </div>

          <img src={visa} alt="" />
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="major-info">
            <label className="details" style={{ width: "86px" }}>
              Name
            </label>
            <input
              type="text"
              required
              className="details-input"
              placeholder="Aubrey Graham"
              id="card_name"
              value={data.card_name}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="major-info">
            <label className="details" style={{ width: "86px" }}>
              Card number
            </label>
            <input
              type="text"
              required
              className="details-input"
              placeholder="**** **** ***** ****"
              id="card_number"
              value={data.card_number}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="minor-info" style={{ gap: "30px" }}>
            <div>
              <label className="minor-details">Expiration date</label>
              <input
                type="text"
                required
                className="minor-input"
                id="expiry_date"
                value={data.expiry_date}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <label className="minor-details">Security code</label>
              <input
                type="text"
                required
                className="minor-input"
                id="security_code"
                value={data.security_code}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <p className="greetings" style={{ marginTop: "49px" }}>
            Billing Address
          </p>

          <div className="major-info">
            <label className="details">First name <span style={{color: "red"}}>*</span></label>
            <input
              type="text"
              required
              id="first_name"
              value={data.first_name}
              onChange={(e) => handleChange(e)}
              className="details-input"
            />
          </div>

          <div className="major-info">
            <label className="details">Last name <span style={{color: "red"}}>*</span></label>
            <input
              type="text"
              required
              id="last_name"
              value={data.last_name}
              onChange={(e) => handleChange(e)}
              className="details-input"
            />
          </div>

          <div className="major-info">
            <label className="details" style={{ width: "103px" }}>
              Street Address <span style={{color: "red"}}>*</span>
            </label>
            <input
              type="text"
              required
              id="street_address"
              value={data.street_address}
              onChange={(e) => handleChange(e)}
              className="details-input"
            />
          </div>

          <div className="minor-info">
            <div className="label-input">
              <label className="minor-details">Apt or unit <span style={{color: "red"}}>*</span></label>
              <input
                type="text"
                className="minor-input"
                id="apt"
                value={data.apt}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="label-input">
              <label className="minor-details">City <span style={{color: "red"}}>*</span></label>
              <input
                type="text"
                className="minor-input"
                id="city"
                value={data.city}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="minor-info" style={{ gap: "30px" }}>
            <div className="label-input">
              <label className="minor-details">State <span style={{color: "red"}}>*</span></label>
              <input
                type="text"
                id="state"
                value={data.state}
                onChange={(e) => handleChange(e)}
                className="minor-input"
              />
            </div>

            <div className="label-input">
              <label className="minor-details">Zip code <span style={{color: "red"}}>*</span></label>
              <input
                type="text"
                id="zip_code"
                value={data.zip_code}
                onChange={(e) => handleChange(e)}
                className="minor-input"
              />
            </div>
          </div>

          <div className="major-info">
            <label className="details">Phone number <span style={{color: "red"}}>*</span></label>
            <input
              type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              id="phone_number"
              value={data.phone_number}
              onChange={(e) => handleChange(e)}
              className="details-input"
            />
          </div>

          <p className="additional-txt">
            We'll contact you in case anything comes up with your order.
          </p>

          <button
            type="submit"
            name="Submit"
            value="login"
            onSubmit={(e) => handleSubmit(e)}
            className="proceed"
            disabled={!data}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryPayment;
