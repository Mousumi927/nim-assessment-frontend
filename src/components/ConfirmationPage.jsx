import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
import "./ConfirmationPage.css";

function ConfirmationPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/api/orders/${id}`);
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        // console.log("Error fetching order:", error);
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  return (
    <div className="confirmation-page-container">
      {" "}
      <h1>Order Confirmation Page</h1>
      {loading && <p>Loading</p>}
      {order && <OrderConfirmation order={order} />}
    </div>
  );
}

export default ConfirmationPage;
