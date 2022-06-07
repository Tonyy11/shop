import './App.css';
import Invoice from './Components/Invoice';
import DeliveryPayment from './Components/DeliveryPayment';
import Shipping from './Components/Shipping';
import Cart from './Components/Cart';
import DeliveryError from './Components/DeliveryError'

function App() {
  return (
    <div className="App">
      {/* <Cart/> */}
      <DeliveryPayment />
      {/* <Shipping /> */}
      {/* <DeliveryError /> */}
      {/* <Invoice /> */}
    </div>
  );
}

export default App;
