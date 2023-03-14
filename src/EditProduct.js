import React from 'react'
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function EditProduct() {
  return (
    <div>
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
              fontWeight: "bold",
            }}
          >
           Edit Product 
          </Typography>
        
        </Container>
      </React.Fragment>
    </div>
    
    </div>
  )
}

export default EditProduct