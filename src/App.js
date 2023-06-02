import React, { useState } from "react";
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
    <ButtonAppBar />

    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/Login">
        <LoginForm />
      </Route>
      <Route path="/Register">
        <Registration />
      </Route>
      <Route path="/ProductListing">
        <ProductListing />
      </Route>
      <Route path="/ClubCoordinatorDashboard">
        <Switch>
          <Route path="/ClubCoordinatorDashboard/EditProduct">
            <EditProduct />
          </Route>
          <Route>
            <ClubCoordinatorDashboard />
          </Route>
        </Switch>
      </Route>
      <Route path="/HODDashboard">
        <HODDashboard />
      </Route>
      <Route path="/ProfessorDashboard">
        <ProfessorDashboard />
      </Route>
      <Route path="/ProductPage">
        <ProductPage />
      </Route>
    </Switch>
<AlignItemsList/>
    <Footer />
  </Router>
    </div>
  );
}
