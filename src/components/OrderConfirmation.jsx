import React from "react";
import "./OrderConfirmation.css";

function OrderConfirmation({ customerName, customerAddress, items, orderId }) {
  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>

      <h2>Order Details:</h2>
      <p>Customer&apos;s Name: {customerName}</p>
      <p>Customer&apos;s Address: {customerAddress}</p>

      <h3>Ordered Items:</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>

      <p>Order ID: {orderId}</p>
    </div>
  );
}

export default OrderConfirmation;
