import {BrowserRouter,Route, Switch} from "react-router-dom"
import './App.css';
import Home from './pages/Home/index';
import Consumption from './pages/Consumption/index';
/* import Identification from './pages/Identification/index'; */
import BaseProducts from './pages/BaseProducts/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/consumption" exact={true} component={Consumption} />
        {/*   <Route path="/identification" exact={true} component={Identification} /> */}
          <Route path="/list-products" exact={true} component={BaseProducts} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
