import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Homepage from "./pages/homepage/Homepage";
import {
  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
          <Homepage />
          </Route>
          <Route path="/users">
          <UserList />
          </Route>
          <Route path="/user/:userId">
          <User />
          </Route>
          <Route path="/newUser">
          <NewUser />
          </Route>
          <Route path="/products">
          <Products />
          </Route>
          <Route path="/product/:productsId">
          <Product />
          </Route>
          <Route path="/newproduct">
          <NewProduct />
          </Route>
          </Switch>
        </div>
        

    </Router>
  );
}

export default App;
