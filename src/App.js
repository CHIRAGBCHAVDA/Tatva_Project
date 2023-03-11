// import React,{useState} from 'react';
// import './App.css';
// import Home from './Components/Home';
// import Title from './Components/Title';
// import About from './Components/About';
// import List from './Components/List';
// import LoginForm from './Components/LoginForm';

// // function App() {
// //   const [page, setPage] = useState('home');

// //   const handleHomeClick = () => {
// //     setPage('home');
// //   };

// //   const handleAboutClick = () => {
// //     setPage('about');
// //   };

// //   return (
// //     <div>
// //       <nav>
// //         <button onClick={handleHomeClick}>Home</button>
// //         <button onClick={handleAboutClick}>About</button>
// //       </nav>

// //       {page === 'home' && <Home />}
// //       {page === 'about' && <About />}
// //     </div>
// //   );
// // }
// function App() {

//   return (
//     <div>

//       {/* <button onClick={() => handleButtonClick()}>About</button>

//       {currentPage ? <Home /> : <About />} */}
//       {/* <Home/> */}
//       <LoginForm />
//     </div>
//   );
// }
// export default App;

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonAppBar from "./ButtonAppBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Login from "./Login";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Registration";
import Footer from "./Footer";
import '@fontsource/roboto/300.css';

const styles = {
  fontFamily: 'Roboto',
};

export default function MyApp() {
  return (
    <div>
      <Router>
        <ButtonAppBar></ButtonAppBar>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Switch>
          <Route exact path="/">
            {/* Home page component */}
          </Route>
          <Route path="/Login">
            <LoginForm />
          </Route>
          <Route path="/Register">
            <Registration />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}
