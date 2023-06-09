import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useHistory } from 'react-router-dom';

const LoggedInHeader = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear any user-related data or tokens from local storage, session storage, or state variables
    sessionStorage.removeItem('token');
    
    // Redirect to the login page
    history.push('/login');
  };
  const styles = {
    buttonContainer: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      marginRight: "2px",
      marginLeft: "2px",
      color: "#f14d54",
    },
    verticalLine: {
      content: '""',
      display: "inline-block",
      width: "1px",
      height: "24px",
      backgroundColor: "gray",
      marginRight: "2px",
      marginLeft: "2px",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "0px 55px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            back
            sx={{ mr: 1 }}
          ></IconButton>

          <img
            src="https://www.marcotls.eu/wp-content/uploads/2020/01/paperless_3-1024x768.jpg"
            alt="Logo"
            style={{ height: "70px", width:"110px" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          
          
          <Button
            onClick={handleLogout}
            sx={{ textTransform: "none" }}
            variant="outlined"
            style={{
              borderColor: "black",
              color: "black",
              fontSize: "14px",
              padding: "3px 7px",
            }}
          >   
           Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoggedInHeader;
