import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Registration() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              paddingTop: "50px",
              paddingBottom: "25px",
              fontWeight:"bold"
            }}
          >
            Login or Create an Account
          </Typography>
          <Typography
            variant="h6"
            style={{ paddingTop: "50px", paddingBottom: "20px" }}
          >
            Personal Information
          </Typography>
          <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
          <div style={{ fontSize: "15px" }}>
            <Typography
              variant="h6"
              color="secondary"
              style={{ paddingTop: "20px", fontSize: "15px" }}
            >
              Please enter the following information to create your account.
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
                    First Name*
                    <input type="text" />
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <label>
                    Last Name*
                    <input type="text" />
                  </label>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ marginBottom: "10px" }}>
                <label>
                  Email*
                  <input type="email" />
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
                  Password*
                  <input type="password" />
                </label>
              </Grid>
              <Grid item xs={6}>
                <label>
                  Confirm Password*
                  <input type="password" />
                </label>
              </Grid>
            </Grid>
          </div>
          <Button variant="contained" color="error" sx={{textTransform:"none", alignItems:"center", marginBottom:"80px"}}>Register</Button>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default Registration;
