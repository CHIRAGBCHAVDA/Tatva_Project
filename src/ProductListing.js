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
          Book Listing
        </Typography>

        <Divider  style={{borderColor:"red", borderBlockEndWidth:"3px",  borderRadius:"10px" ,width:"190px", margin:"auto", marginBottom:"50px"}}></Divider>

        <Box sx={{ flexGrow: 1 }}>
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
        </Box>
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
            className={classes.card}
            style={{ width: "200px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Product Title
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  Lorem
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
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur'
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
                  MRP &nbsp;
                  <strike>$ 1000</strike>
                  &nbsp;
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  20.00% OFF
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  $ 800
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
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "200px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="/static/images/cards/contemplative-reptile.jpg"
                m
                alt="green iguana"
                style={{
                  width: "250px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Product Title
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  Lorem
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
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur'
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
                  MRP &nbsp;
                  <strike>$ 1000</strike>
                  &nbsp;
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  20.00% OFF
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  $ 800
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
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "200px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="/static/images/cards/contemplative-reptile.jpg"
                m
                alt="green iguana"
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Product Title
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  Lorem
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
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur'
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
                  MRP &nbsp;
                  <strike>$ 1000</strike>
                  &nbsp;
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  20.00% OFF
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  $ 800
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
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "200px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="/static/images/cards/contemplative-reptile.jpg"
                m
                alt="green iguana"
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Product Title
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  Lorem
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
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur'
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
                  MRP &nbsp;
                  <strike>$ 1000</strike>
                  &nbsp;
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  20.00% OFF
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  $ 800
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
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "200px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="/static/images/cards/contemplative-reptile.jpg"
                m
                alt="green iguana"
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Product Title
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  Lorem
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
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur'
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
                  MRP &nbsp;
                  <strike>$ 1000</strike>
                  &nbsp;
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  20.00% OFF
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  $ 800
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
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "200px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="/static/images/cards/contemplative-reptile.jpg"
                m
                alt="green iguana"
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Product Title
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  Lorem
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
                  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur'
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
                  MRP &nbsp;
                  <strike>$ 1000</strike>
                  &nbsp;
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  20.00% OFF
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  $ 800
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
                  Add to Cart
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
            <Stack spacing={2}>
              <Pagination count={10} style={{ margin: "auto" }} color="error" />
            </Stack>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
