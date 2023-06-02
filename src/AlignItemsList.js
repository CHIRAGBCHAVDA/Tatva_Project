import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
    const [data, setData] = useState([]);
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



  return (
    <List sx={{ width: '75%', bgcolor: 'background.paper', marginX:"100px", marginY:"100px", marginRight:"100px"  }}>
      {data.map(item => (
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
        </ListItem>
        <Divider variant="inset" component="li" />
      </React.Fragment>
    ))}
    </List>
  );
}
