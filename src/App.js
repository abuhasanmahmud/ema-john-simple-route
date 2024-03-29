import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>

      <BrowserRouter>
        <Switch>

          <Route exact path="/">
              <Shop></Shop>
          </Route>

          <Route path="/shop">
              <Shop></Shop>
          </Route>

          <Route path="/inventory">
              <Inventory></Inventory>
          </Route>

          <Route path="/review">
              <OrderReview></OrderReview>
          </Route>

          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
