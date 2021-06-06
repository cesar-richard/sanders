import "./App.css";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";

import OrderCard from "./components/OrderCard";

function App() {
  return (
    <div className="mainContainer">
      {[
        {
          key: 1,
          name: "Cesar Richard",
          order: [{ item: "Chips au poivron", quantity: 1 }]
        },
        {
          key: 2,
          name: "Louise Mention",
          order: [{ item: "Chips au poivron", quantity: 1 }]
        },
        {
          key: 3,
          name: "Alice Mention",
          order: [{ item: "Chips au poivron", quantity: 1 }]
        }
      ].map(x => (
        <OrderCard key={x.key} name={x.name} order={x.order} />
      ))}
    </div>
  );
}

export default App;
