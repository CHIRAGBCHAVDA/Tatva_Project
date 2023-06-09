import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";

const Registration = () => {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "left",
  //   color: theme.palette.text.secondary,
  // }));

  const handleregistrationForm = (values) => {
    console.log("Form is submitted", values);
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    fetch("http://localhost:8001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm password is required."),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleregistrationForm}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                width: "100%",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", display: "flex" }}></div>

              <React.Fragment>
                <CssBaseline />
                <Container fixed>
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
                  <Divider
                    style={{
                      borderColor: "red",
                      borderBlockEndWidth: "3px",
                      borderRadius: "10px",
                      width: "190px",
                      margin: "auto",
                      marginBottom: "50px",
                    }}
                  ></Divider>

                  <Typography variant="h6" style={{ paddingBottom: "20px" }}>
                    Personal Information
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
                      Please enter the following information to create your
                      account.
                    </Typography>

                    <Box sx={{ width: "100%", paddingTop: "20px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={6}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{
                                paddingBottom: "15px",
                                fontSize: "15px",
                              }}
                            >
                              First Name*
                            </Typography>
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              label="Firstame"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                            />
                            {touched.firstName && errors && errors.firstName}
                          </label>
                        </Grid>
                        <Grid item xs={6}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{
                                paddingBottom: "15px",
                                fontSize: "15px",
                              }}
                            >
                              Last Name*
                            </Typography>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              label="LastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                            />
                            {touched.lastName && errors && errors.lastName}
                          </label>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} style={{ marginBottom: "10px" }}>
                        <label>
                          <Typography
                            variant="h6"
                            style={{
                              paddingBottom: "15px",
                              fontSize: "15px",
                            }}
                          >
                            Email*
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
                    </Box>
                  </div>

                  <Typography
                    variant="h6"
                    style={{ paddingTop: "50px", paddingBottom: "20px" }}
                  >
                    Login Information
                  </Typography>
                  <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
                  <div style={{ fontSize: "15px" }}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      style={{ marginBottom: "60px", marginTop: "20px" }}
                    >
                      <Grid item xs={6}>
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
                            name="password"
                            id="password"
                            label="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {touched.password && errors && errors.password}
                        </label>
                      </Grid>
                      <Grid item xs={6}>
                        <label>
                          <Typography
                            variant="h6"
                            style={{
                              paddingBottom: "15px",
                              fontSize: "15px",
                            }}
                          >
                            Confirm Password*
                          </Typography>
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            label="ConfirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                          />
                          {touched.confirmPassword &&
                            errors &&
                            errors.confirmPassword}
                        </label>
                      </Grid>
                    </Grid>
                  </div>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      textTransform: "none",
                      alignItems: "center",
                      marginBottom: "80px",
                    }}
                    type="submit"
                  >
                    Register
                  </Button>
                </Container>
              </React.Fragment>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
