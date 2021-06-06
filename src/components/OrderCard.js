import React from "react";
import OrderLine from "./OrderLine";
export default function OrderCard({ name, order }) {
  return (
    <div className="orderCard">
      <div>{name}</div>
      <div>
        <ul>
          {order.map(x => (
            <OrderLine item={x.item} quantity={x.quantity} />
          ))}
        </ul>
      </div>
    </div>
  );
}
