import React, { useState, useEffect } from "react";
import ButtonAppBar from "./ButtonAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Registration from "./Registration";
import Footer from "./Footer";
import "@fontsource/roboto/300.css";
import ProductPage from "./ProductPage";
import EditProduct from "./EditProduct";
import ProductListing from "./ProductListing";
import LoggedInHeader from "./Components/LoggedInHeader";
import Paper from '@mui/material/Paper';
import ClubCoordinatorDashboard from "./Components/ClubCoordinatorDashboard";
import HODDashboard from "./Components/HODDashboard";
import ProfessorDashboard from "./Components/ProfessorDashboard";
import AlignItemsList from "./AlignItemsList";
import PrincipalDashboard from "./PrincipalDashboard";
import withAuth from "./withAuth";


// function MyComponent() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   }
// }
// const handleLogout = () => {
//   setIsLoggedIn(false);
// }


export default function MyApp() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.clear();
    console.log("#################");
    history.push('/Login');
  };


  
  return (
    <div class="container">
      <Router>

        <Switch>
          <Route exact path="/">
          <ButtonAppBar />
            <LoginForm />
          </Route>
          <Route path="/Login">
          <ButtonAppBar />
            <LoginForm />
          </Route>
          <Route path="/Register">
            <Registration />
          </Route>
          <Route path="/PrincipalDashboard" component={withAuth(PrincipalDashboard)} >
            <LoggedInHeader />
          <Switch>
              <Route path="/PrincipalDashboard/ProductListing">
                <ProductListing />
              </Route>
              <Route path="/PrincipalDashboard/AlignItemsList">
                <AlignItemsList />
              </Route>
              <Route>
                <PrincipalDashboard />
              </Route>
            </Switch>
           
          </Route>
          <Route path="/ClubCoordinatorDashboard" component={withAuth(ClubCoordinatorDashboard)}>
            <LoggedInHeader/>
            <Switch>
              <Route path="/ClubCoordinatorDashboard/EditProduct">
                <EditProduct />
              </Route>
              <Route path="/ClubCoordinatorDashboard/AlignItemsList">
                <AlignItemsList />
              </Route>
              <Route>
                <ClubCoordinatorDashboard />
              </Route>
            </Switch>
          </Route>
          <Route path="/HODDashboard">
          <LoggedInHeader/>
            <HODDashboard />
          </Route>
          <Route path="/ProfessorDashboard">
          <LoggedInHeader/>
            <ProfessorDashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <withAuth />
    </div>
  );
}
