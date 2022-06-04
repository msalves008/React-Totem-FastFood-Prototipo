import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Consumption from "./pages/Consumption/index";
import BaseProducts from "./pages/BaseProducts/index";
import CheckoutOrder from "./pages/CheckoutOrder/index";
import PixPayment from "./pages/Payment/PixPayment";
import { CartProvider } from "./context/useProductIdContext";
import Identification from "./pages/Identification";
import { SatisfactionSurvey } from "./pages/SatisfactionSurvey";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/consumption" exact={true} component={Consumption} />
              <Route path="/identification" exact={true} component={Identification} />
            <Route
              path="/list-products"
              exact={true}
              component={BaseProducts}
            />
            <Route
              path="/checkout-order"
              exact={true}
              component={CheckoutOrder}
            />
            <Route path="/pixpayment" exact={true} component={PixPayment} />
            <Route path="/satisfactionsurvey" exact={true} component={SatisfactionSurvey} />
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
