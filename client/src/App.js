import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import FakeForm from "./pages/fakeForm/FakeForm";

function App() {
  return (
    <Router>
      <div className="Appxx">  </div>
      <div className="App">
         <div spc="space"> { "⠀" } </div>
         <div spc="space"> { "⠀" } </div>
            <Topbar />
            <div spc="space"> { "⠀" } </div>
            </div>

      
      <div className="container">
        <Sidebar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>

          <Route path="/product/:productId">
            <Product />
          </Route>

          <Route path="/fakerequests">
            <FakeForm/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
