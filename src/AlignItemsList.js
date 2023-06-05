 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {  Button,Modal,TextField } from '@mui/material';

export default function AlignItemsList() {
  const SecretKey = "ChiragLovesHari";
    const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  // const[userInputKey,setUserInputKey] = useState("");
  // setSecretKey = (key) => {
  //   setUserInputKey(key);
  //   if(key == SecretKey){
  //     console.log("Hurrayyyy You guys gonaa marryyy");
  //   }
  //   else {
  //     console.log("Propose again");
  //   }
  // }

    const [enteredKey, setEnteredKey] = useState('');
  
    const storedKey = 'abcdefgh';
  
    const handleKeyChange = (event) => {
      setEnteredKey(event.target.value);
    };
  
    const handleVerification = () => {
      if (enteredKey === storedKey) {
        // Success
        console.log('Keys match!');
        alert('Keys match!');
        // Perform any additional actions or navigate to another page
      } else {
        // Failure
        console.log('Keys do not match!');
        alert('Keys do not match!');
        // Display an error message or perform any other actions
      }
    };


    useEffect(() => {
        // Fetch the data from the server
        axios.get('http://localhost:8001/api/applications')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };


    return (


        // <div>

        //     <Typography
        //         variant="h3"
        //         style={{
        //             textAlign: "center",
        //             paddingTop: "50px",
        //             paddingBottom: "25px",
        //             fontWeight: "bold",
        //         }}
        //     >
        //         Drafts
        //     </Typography>

        //     <Divider style={{ borderColor: "red", borderBlockEndWidth: "3px", borderRadius: "10px", width: "190px", margin: "auto", marginBottom: "50px" }}></Divider>
        //     <List sx={{ width: '85%', bgcolor: 'background.paper', marginX: "100px", marginY: "100px", }}>
        //         {data.map(item => (
        //             <React.Fragment key={item.id}>
        //                 <ListItem alignItems="flex-start">
        //                     <ListItemAvatar>
        //                         <Avatar alt={item.avatarAlt} src={item.avatarSrc} />
        //                     </ListItemAvatar>
        //                     <ListItemText
        //                         primary={item.Subject}
        //                         secondary={
        //                             <React.Fragment>
        //                                 <Typography
        //                                     sx={{ display: 'inline' }}
        //                                     component="span"
        //                                     variant="body2"
        //                                     color="text.primary"
        //                                 >
        //                                     {item.SecurityLevel}
        //                                 </Typography>
        //                                 {item.Description}
        //                             </React.Fragment>
        //                         }
        //                     />
        //                 </ListItem>
        //                 <Divider variant="inset" component="li" />
        //             </React.Fragment>
        //         ))}
        //     </List>


        // </div>


        <div>
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "25px",
          fontWeight: "bold",
        }}
      >
        Drafts
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

      <List
        sx={{
          width: '85%',
          bgcolor: 'background.paper',
          marginX: "100px",
          marginY: "100px",
        }}
      >
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.avatarAlt} src={item.avatarSrc} />
              </ListItemAvatar>
              <ListItemText
                primary={item.Subject}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.SecurityLevel}
                    </Typography>
                    {item.Description}
                  </React.Fragment>
                }
              />
              <div style={{ marginLeft: 'auto' }}>
                <Button variant="contained" color="primary">
                  View
                </Button>
                <Button variant="contained" onClick={handleOpenModal} color="success" style={{ marginLeft: '10px' }}>
                  Accept
                </Button>
                <Button variant="contained" color="error" style={{ marginLeft: '10px' }}>
                  Reject
                </Button>
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>


      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
          <Typography variant="h5" gutterBottom>
            Enter Secret Key
          </Typography>
          <TextField
            label="Secret Key"
            variant="outlined"
            value={enteredKey} 
            onChange={handleKeyChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleVerification}>
            Verify
          </Button>
        </div>
      </Modal>

    </div>
    );
}
