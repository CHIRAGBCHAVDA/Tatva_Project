import * as React from "react";
import ButtonAppBar from "./ButtonAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Registration";
import Footer from "./Footer";
import "@fontsource/roboto/300.css";
import ProductPage from "./ProductPage";
import EditProduct from "./EditProduct";
import ProductListing from "./ProductListing";
import LoggedInHeader from "./Components/LoggedInHeader";
import Paper from '@mui/material/Paper';



function MyComponent() {
  

  
}





export default function MyApp() {
  return (
    <div class="container">
      <Router>
        <ButtonAppBar></ButtonAppBar>
         {/* <Switch>
          <Route exact path="/">
             <LoginForm/> 
          </Route>
          <Route path="/Login">
            <LoginForm />
            <Switch>
            <Route path="/Register">
            <Registration/>
            </Route>
            </Switch>
          </Route>
          <Route path="/Register">
            <Registration />

          </Route>
           </Switch> */}

           <LoginForm/>
           <EditProduct />
           <ProductPage />
           <ProductListing />
        <Footer></Footer>
      </Router>
    </div>
  );
}
