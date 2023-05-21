import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { fontSize } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";

const useStyles = makeStyles({
  card: {
    minWidth: 200,
    margin: 30,
  },
  media: {
    position: 'relative',
    '&:hover': {
      '&::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
      },
      '& img': {
        opacity: 0.5,
        transition: 'opacity 0.3s ease-in-out',
      },
    },
  },
});

export default function ProductListing() {
  const classes = useStyles();

  return (
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
          Dashboard
        </Typography>

        <Divider  style={{borderColor:"red", borderBlockEndWidth:"3px",  borderRadius:"10px" ,width:"190px", margin:"auto", marginBottom:"50px"}}></Divider>

        {/* <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={0}
            position="static"
            style={{ backgroundColor: "white", color: "black"}}
          >
            <Toolbar style={{ display:"flex", justifyContent:"space-between"}}>
              <Typography
                variant="h6"
                style={{
                  paddingBottom: "15px",
                  fontSize: "15px",
                }}
              >
                Product Name - 14366 items
              </Typography>
              <div>
               <span style={{width:"100%", whiteSpace: "nowrap"}}>Sort By &nbsp;</span>
                <select id="catergories" name="description" style={{width:"200px"}}>
                  <option value="1">A - Z</option>
                  <option value="2">Rating</option>
                  <option value="3">Price</option>
                  <option value="4">Date</option>
                </select>
              </div>
            </Toolbar>
          </AppBar>
        </Box> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            position: "static",
            justifyContent: "stretch",
            minWidth:"100%"
          }}
        >
          <Card
            className={`${classes.card} ${classes.root}`}
            style={{width: "210px",height:"480px",borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
              className={classes.media}
                component="img"
                width="50%"
                image="data:image/jpeg;base64,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"
                alt="green iguana"
                style={{
                  width: "210px",
                  height: "210px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Drafts
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  A piece of writing or drawing that is done early in the development of a work to help prepare it in its final form
                </Typography>
              </CardContent>
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Drafts
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "210px",height:"480px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="https://cdn.xxl.thumbs.canstockphoto.com/check-mark-3d-people-man-person-showing-thumb-up-with-green-check-mark-in-box-stock-illustration_csp10450583.jpg"
                alt="green iguana"
                style={{
                  width: "223px",
                  height: "210px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Approve
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                 Approval refers to the process of granting authorization, consent, or endorsement to a request, proposal, action, or document.

                </Typography>
              </CardContent>          
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Approve
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "210px",height:"480px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="https://i.pinimg.com/564x/73/46/c5/7346c52ab369abbaa2262019847a5eee.jpg"
                m
                alt="green iguana"
                style={{
                  width: "210px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Decline
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                Decline is a process marked by a downward trajectory, often involving a reduction in quantity, quality, efficiency, or effectiveness over time.
                </Typography>
              </CardContent>
             
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Decline
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{width: "210px",height:"480px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="https://media.istockphoto.com/id/1179967286/vector/text-file-or-document-comments-and-remarks-vector-illustration-flat-cartoon-warning-or.jpg?s=612x612&w=0&k=20&c=0WXQN8Ygi-ifcRay_SXfJmv0M-G8zeXX5TpoX-jSR7g="
                m
                alt="green iguana"
                style={{
                  width: "210px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Remarks
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                 This remark can serve various purposes, offering feedback or suggestions, providing or seeking approval or disapproval.
                </Typography>
              </CardContent>
              
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Remark
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
