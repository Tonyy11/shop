import "./App.css";
import Invoice from "./Components/Invoice";
import DeliveryPayment from "./Components/DeliveryPayment";
import Shipping from "./Components/Shipping";
import Cart from "./Components/Cart";
import DeliveryError from "./Components/DeliveryError";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Cart />} />
          <Route path="/deliverypayment" element={<DeliveryPayment />} />
          <Route path="/deliveryerror" element={<DeliveryError />} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </div>
  );
}

export default App;
