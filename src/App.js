import "./App.css";
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
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/deliverypayment" element={ <DeliveryPayment />} />
          <Route path="/deliveryerror" element={<DeliveryError />} />
        </Routes>
        {/* <Post /> */}
        {/* <DeliveryPayment /> */}
      </div>
  );
}

export default App;
