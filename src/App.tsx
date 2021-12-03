import {BrowserRouter,Route, Switch} from "react-router-dom"
import './App.css';
import Home from './pages/Home/index';
import Consumption from './pages/Consumption/index';
/* import Identification from './pages/Identification/index'; */
import BaseProducts from './pages/BaseProducts/index';
import CheckouOrder from './pages/CheckouOrder/index';
import PixPayment from "./pages/Payment/PixPayment";
import PasswordOrder from "./pages/PasswordOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/consumption" exact={true} component={Consumption} />
        {/*   <Route path="/identification" exact={true} component={Identification} /> */}
          <Route path="/list-products" exact={true} component={BaseProducts} />
          <Route path="/checkout-order" exact={true} component={CheckouOrder} />
          <Route path="/pixpayment" exact={true} component={PixPayment} />
          <Route path="/password" exact={true} component={PasswordOrder} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
