
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
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import CryptoJS from 'crypto-js';


export default function AlignItemsList() {
  const SecretKey = "ChiragLovesHari";
    const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const[dataId,setDataId] = useState();

    const [enteredKey, setEnteredKey] = useState('');
    const [file,setFile] = useState();
  
    const storedKey = 'abcdefgh';
  
    const handleKeyChange = (event) => {
      setEnteredKey(event.target.value);
    };
  
    const handleVerification = () => {
      let id = Number(dataId + 1);

      console.log("The id is : ",id);
      if (enteredKey === storedKey) {
        // Success
        console.log('Keys match!');
        alert('Keys match! and the id is : ' + id);
        let fileName = fetchData(id);
        fileName = file;
        //now we will get the file here by name so give me where are all the files path of that bunnnnnnn
        // D:\ReactJS Project\files


        setOpenModal(false);
        setEnteredKey("");
        addDigitalSignature();
        // Perform any additional actions or navigate to another page
      } else {
        // Failure
        console.log('Keys do not match!');
        alert('Keys do not match!');
        // Display an error message or perform any other actions
      } 

    };

    const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8001/api/applications/${id}/filename`);
        const filename = response.data.filename;
        console.log(filename); // Output the filename to the console or perform any further actions
        setFile(filename);
        return filename;
      } catch (error) {
        console.error(error);
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

    const handleOpenModal = (id) => {
      setDataId(id);
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    //------------------File SIgn FUnc
    const addDigitalSignature = async () => {
      const pdfBytes = await fetch(process.env.PUBLIC_URL +`/Files/${file}`).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(pdfBytes);
    
      // Add a new page to the PDF
      const [page] = pdfDoc.getPages();
      const { width, height } = page.getSize();
    
      // Embed a standard font
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
      // Add your digital signature to the page
      // const signatureText = 'Dr. G.P.Vadodariya';
      const signatureSize = 16;
      const signatureColor = rgb(0, 0, 0); // Black color
    
      const privateKey = 'YourPrivateKey'; // Replace with your private key
    const dataToSign = 'Dr. G.P.Vadodariya'; // Replace with the data you want to sign

    const signature = CryptoJS.SHA256(dataToSign + privateKey).toString().substring(0,10);

      page.drawText(signature, {
        x: 50, // Adjust the position according to your requirements
        y: 50, // Adjust the position according to your requirements
        size: signatureSize,
        font: helveticaFont,
        color: signatureColor,
      });
    
      // Save the modified PDF with the digital signature
      const modifiedPdfBytes = await pdfDoc.save();
    
      // Convert the modified PDF into a blob
      const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
    
      // Generate a URL for the modified PDF
      const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);
    
      // Open the modified PDF in a new browser tab or window
      window.open(modifiedPdfUrl);
    };

    const handleViewButtonClick = () => {
      const fileUrl = process.env.PUBLIC_URL + `/Files/canva_certi1.pdf`;
      window.open(fileUrl);
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
        {data.map((item,index) => (
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
                <Button variant="contained" color="primary" onClick={handleViewButtonClick}>  
                  View
                </Button>
                <Button variant="contained" onClick={()=> handleOpenModal(index)} color="success" style={{ marginLeft: '10px' }}>
                  Accept
                </Button>
                <Button variant="contained" color="error" style={{ marginLeft: '10px' }}>
                  Reject
                </Button>
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />

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
            id="secretKeyTF"
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={()=> handleVerification()}>
            Verify
          </Button>
        </div>
      </Modal>



          </React.Fragment>

          
        
        ))
        
        }
      </List>
    </div>
    );
}
