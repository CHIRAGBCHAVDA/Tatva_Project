import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Footer() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />


        <Box
          sx={{
            bgcolor: "#E6E6FA",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="https://www.marcotls.eu/wp-content/uploads/2020/01/paperless_3-1024x768.jpg"
            alt="Logo"
            style={{ height: "150px", width:"300px" }}
          />

        </Box>
      </React.Fragment>
    </div>
  );
}

export default Footer;
