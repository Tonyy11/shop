import React from "react";
import "./Shipping.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const url = `https://giftshop12.herokuapp.com/shipping-address`;
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    street_address: "",
    apt: "",
    city: "",
    state: "",
    zip_code: "",
    phone_number: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      street_address: data.street_address,
      apt: data.apt,
      city: data.city,
      state: data.state,
      zip_code: data.zip_code,
      phone_number: data.phone_number,
    });
    console.log(response);
    if (response.statusText === "Created") {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/deliverypayment");
    }
  }, [isSubmitted, navigate]);

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <div>
        <div className="headee">
          <p className="cart-txt">Shipping</p>
        </div>

        <div className="bodee">
          <p className="greetings">Input shipping address below</p>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="major-info">
              <label className="details">First name *</label>
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
              <label className="details">Last name *</label>
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
                Street Address *
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
              <div>
                <label className="minor-details">Apt or unit</label>
                <input
                  type="text"
                  id="apt"
                  required
                  value={data.apt}
                  onChange={(e) => handleChange(e)}
                  className="minor-input"
                />
              </div>

              <div>
                <label className="minor-details">City *</label>
                <input
                  type="text"
                  id="city"
                  required
                  value={data.city}
                  onChange={(e) => handleChange(e)}
                  className="minor-input"
                />
              </div>
            </div>

            <div className="minor-info" style={{gap: "30px"}}>
              <div>
                <label className="minor-details">State *</label>
                <input
                  type="text"
                  id="state"
                  required
                  value={data.state}
                  onChange={(e) => handleChange(e)}
                  className="minor-input"
                />
              </div>

              <div>
                <label className="minor-details">Zip code *</label>
                <input
                  type="text"
                  id="zip_code"
                  required
                  value={data.zip_code}
                  onChange={(e) => handleChange(e)}
                  className="minor-input"
                />
              </div>
            </div>

            <div className="major-info">
              <label className="details">Phone number *</label>
              <input
                type="number"
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
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
