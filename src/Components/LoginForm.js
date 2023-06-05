import React, { useState } from "react";
import "./Title.css";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ProductListing from "../ProductListing";
import { useHistory } from 'react-router-dom';
import ClubCoordinatorDashboard from '../Components/ClubCoordinatorDashboard';
import HODDashboard from "../Components/HODDashboard";
import ProfessorDashboard from "../Components/ProfessorDashboard";



const LoginForm = () => {

  const [role, setRole] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleForm = async (values, { resetForm }) => {
    console.log("Form is submitted", values);
    console.log("Form is submitted", values.role);
    try {

      const response = await axios.get(`http://localhost:8000/users?email=${values.email}&password=${values.password}&role=${values.role}`);
      if (response.data.length > 0) {
        setIsLoggedIn(true);
        toast.success('Login successful!', { autoClose: 2000 });
        if (setIsLoggedIn) {
          // Render different pages based on selected role
          if (values.role === 'Principal') {
            history.push('/PrincipalDashboard');
          }
          if (values.role === 'HOD') {
            history.push('/HODDashboard');
          }
          if (values.role === 'Professor') {
            history.push('/ProfessorDahboard');
            
          }
          if (values.role === 'ClubCoordinator') {
           history.push('/ClubCoordinatorDashboard');
          }

        }
        resetForm();

      } else {
        toast.error('Invalid email or password!', { autoClose: 2000 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email must not be empty"),
    password: Yup.string()
      .min(8, "Minimum 8 characters required")
      .required("Enter Password"),
  });

  if(isLoggedIn){
   return <ProductListing />
  }
else{
  return (
    
    <div class="container">
      <Formik
        initialValues={{ email: "", password: "",role:"" }}
        validationSchema={validationSchema}
        onSubmit={handleForm}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                width: "100%",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", display: "flex" }}>
                <React.Fragment>
                  <CssBaseline />
                  <Container>
                    <Typography
                      variant="h3"
                      style={{
                        textAlign: "center",
                        paddingTop: "50px",
                        paddingBottom: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      Login or Create an Account
                    </Typography>
                    <Divider style={{ borderColor: "red", borderBlockEndWidth: "3px", borderRadius: "10px", width: "190px", margin: "auto" }}></Divider>

                    <Box sx={{ width: "100%", paddingTop: "20px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <Typography
                            variant="h6"
                            style={{
                              paddingTop: "50px",
                              paddingBottom: "20px",
                            }}
                          >
                            New Users
                          </Typography>
                          <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
                          <div style={{ fontSize: "15px" }}>
                            <Typography
                              variant="h6"
                              style={{
                                paddingTop: "20px",
                                fontSize: "15px",
                                color: "gray",
                              }}
                            >
                              Registration is free and easy
                            </Typography>

                            <Typography
                              variant="h6"
                              style={{
                                paddingTop: "20px",
                                fontSize: "15px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li>Digital Document</li>
                            </Typography>

                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                paddingTop: "15px",
                              }}
                            >
                              <li>Digital Signatures and Approvals</li>
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{
                                paddingTop: "15px",
                                paddingBottom: "190px",
                                fontSize: "15px",
                                paddingLeft: "0px",
                              }}
                            >
                              <li>Time Saving:</li>
                            </Typography>
                            <Button
                              variant="contained"
                              color="error"
                              sx={{
                                textTransform: "none",
                                alignItems: "center",
                                marginBottom: "80px",
                              }}
                              style={{ height: "45px", width: "220px" }}
                            >
                              <Link to="/Register" style={{ color: "white" }}>
                                Create an account
                              </Link>
                            </Button>
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            variant="h6"
                            style={{
                              paddingTop: "50px",
                              paddingBottom: "20px",
                            }}
                          >
                            Registered Users
                          </Typography>
                          <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
                          <Typography
                            variant="h6"
                            style={{
                              paddingTop: "20px",
                              paddingBottom: "20px",
                              fontSize: "15px",
                              color: "gray",
                            }}
                          >
                            If you have an account with us, please log in.
                          </Typography>

                          <Grid>
                            <label>
                              <Typography
                                variant="h6"
                                style={{
                                  paddingBottom: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                Email Address*
                              </Typography>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                label="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              {touched.email && errors && errors.email}
                            </label>
                          </Grid>

                          <Grid
                            style={{ marginTop: "40px", marginBottom: "60px" }}
                          >
                            <label>
                              <Typography
                                variant="h6"
                                style={{
                                  paddingBottom: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                Password*
                              </Typography>
                              <input
                                type="password"
                                id="password"
                                name="password"
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                              />
                              {touched.password && errors && errors.password}
                            </label>
                          </Grid>

                          <Grid
                            style={{ marginTop: "40px", marginBottom: "60px" }}
                          >
                            <label>
                              <Typography
                                variant="h6"
                                style={{
                                  paddingBottom: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                Role*
                              </Typography>

                              <select
                                id="role"
                                name="role"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.role}
                              >
                                <option value="">Select a role</option>
                                <option value="Principal">Principal</option>
                                <option value="HOD">HOD</option>
                                <option value="Professor">Professor</option>
                                <option value="ClubCoordinator">Club Coordinator</option>
                              </select>
                              {touched.role && errors && errors.role}
                            </label>
                          </Grid>

                          <Button
                            variant="contained"
                            color="error"
                            sx={{
                              textTransform: "none",
                              alignItems: "center",
                              marginBottom: "80px",
                            }}
                            type="submit"
                            style={{ height: "45px", width: "100px" }}
                          >
                            Login
                          </Button>
                        </Grid>
                      </Grid>
                      <ToastContainer />
                    </Box>
                  </Container>
                </React.Fragment>
              </div>
            </div>
          </form>
        )}
      </Formik>
      {isLoggedIn}
    </div>
  );
}

 
};

export default LoginForm;
