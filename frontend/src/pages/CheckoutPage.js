// CheckoutPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

function CheckoutPage({ cart, setCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMode: "",
  });
  const navigate = useNavigate();

  const handleQuantityChange = (id, increment) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setCart([]); // Clear the cart
    navigate("/"); // Redirect to the homepage
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <h1 className="logo">Travel Essentials</h1>
          <button className="go-home-button" onClick={() => navigate("/")}>Go Back to Shop</button>
        </div>
        <h2>Your cart is empty!</h2>
        <button onClick={() => navigate("/")}>Go Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1 className="logo">Travel Essentials</h1>
        <button className="go-home-button" onClick={() => navigate("/")}>Go Back to Shop</button>
      </div>
      <h2>Checkout</h2>
      {!isCheckout ? (
        <>
          <div className="cart-item-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div>
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                  <p>Total: ₹{item.price * item.quantity}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ₹{totalAmount}</h3>
          <button onClick={() => setIsCheckout(true)}>Proceed to Checkout</button>
        </>
      ) : (
        <form className="checkout-form" onSubmit={handleCheckout}>
          <h3>Enter Your Information</h3>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="paymentMode">Payment Mode:</label>
            <select
              id="paymentMode"
              name="paymentMode"
              value={userInfo.paymentMode}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Payment Mode
              </option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </div>
          <button type="submit" className="submit-button">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default CheckoutPage;
