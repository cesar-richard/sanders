import React from "react";
export default function OrderLine({ item, quantity }) {
  return (
    <li>
      {quantity} * <b>{item}</b>
    </li>
  );
}
