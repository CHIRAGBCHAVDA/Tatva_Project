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
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const LoginForm = () => {
  const breadcrumbs = [
    
    <Typography key="1" color="text.primary">
      Home
    </Typography>,
    <Typography key="2" color="error">
      Login
    </Typography>,
    
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (data) => {
    console.log("Form is submitted", data);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?username=${email}`
      );

      if (response.data.length === 0) {
        toast.error("User not found");
        return;
      }

      const user = response.data[0];

      // check if password is correct and perform login
      // ...
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
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

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleForm}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
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
                    <Grid container justifyContent="center" alignItems="center">
                    <Breadcrumbs
                      separator="›"
                      aria-label="breadcrumb"
                      sx={{textAlign:"center", my: 'auto'}}
                      style={{
                        marginTop: "20px",
                        alignContent:"center",
                        margin:"auto",
                        justifyContent:"center"
                      }}
                    >
                      {breadcrumbs}
                    </Breadcrumbs>

                    </Grid>
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
                    <Divider  style={{borderColor:"red", borderBlockEndWidth:"3px",  borderRadius:"10px" ,width:"190px", margin:"auto"}}></Divider>

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
                            New Customer
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
                              <li>Faster Checkout</li>
                            </Typography>

                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                paddingTop: "15px",
                              }}
                            >
                              <li>Save multiple shipping addresses</li>
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
                              <li>View and track orders and more</li>
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
                            Registered Customers
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
                              />
                              {touched.password && errors && errors.password}
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
    </div>
  );
};

export default LoginForm;
