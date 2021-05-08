import logo from "./logo.svg";
import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Admin from "./components/Admins/Admin";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import AddProduct from "./components/AddProduct/AddProduct";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Order from "./components/Order/Order";

export const UserDetails = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({
    name:"",
    email:"",
    photoURL:"",
    isLoggedIn:false,
    products: []
  })
  return (
    <UserDetails.Provider value={[loggedInUser, setLoggedInUser]}  >
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/admins'>
          <Admin></Admin>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/manageProduct'>
          <ManageProduct></ManageProduct>
        </Route>
        <Route exact path='/addProduct'>
          <AddProduct></AddProduct>
        </Route>
        <PrivateRoute path="/cart">
            <Cart></Cart>
        </PrivateRoute>
        <PrivateRoute path="/orders">
            <Order></Order>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserDetails.Provider>
  );
}

export default App;
