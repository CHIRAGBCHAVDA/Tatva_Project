import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Divider from "@mui/material/Divider";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import axios from 'axios';

const validationSchema = Yup.object().shape({
  subject: Yup.string().required('Subject is required'),
  securityLevel: Yup.string().oneOf(['1', '2', '3'], 'Invalid security level').required('Security level is required'),
  description: Yup.string().min(10, 'Description must be at least 10 characters').required('Description is required'),
  file: Yup.mixed().required('File is required'),
});

// const [selectedFile, setSelectedFile] = useState(null);

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   setSelectedFile(file);
// };

// const handleFormSubmit = (event) => {
//   event.preventDefault();
  
// };

const handleForm = async (values, { setSubmitting }) => {
  //   console.log(values);
  // fetch('http://localhost:8000/Applications', {
  //   method: 'POST',
  //   body: JSON.stringify(values),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('Data submitted successfully:', data);
  //     // Reset the form after successful submission
  //     setSubmitting(false);
  //   })
  //   .catch((error) => {
  //     console.error('Error submitting data:', error);
  //     setSubmitting(false);
  //   });

  try {
    console.log(values)

    let filePath = "";
      const reader = new FileReader();
      reader.onload = (e) => {
        filePath = e.target.result;
        // Use the filePath as needed (e.g., send it to the server, display it in the UI, etc.)
        console.log(filePath);
      };
      reader.readAsDataURL(values.file);
    
    
    // const formData = new FormData();
    // formData.append('Subject', values.subject);
    // formData.append('SecurityLevel', values.securityLevel);
    // formData.append('Description', values.description);
    // formData.append('File', filePath);

    const data = {
      Subject: values.subject,
      SecurityLevel: values.securityLevel,
      Description: values.description,
      File: filePath,
    };

    console.log("The form data is : ", data)
    const response = await axios.post('http://localhost:8001/api/applications', data);
    setSubmitting(false);
    console.log(response.data); // Optional: Log the response from the server
  } catch (error) {
    console.error(error);
  }
};


function EditProduct() {
  
  

  function handleEditorChange (event, editor){
    const data = editor.getData();
    console.log(data);
  };


  return (
    <div>
      <div>
        <Formik
          initialValues={{
            subject: "",
            securityLevel: "1",
            description: "",
            file: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleForm}
        >
          {({
            values,
            errors,
            // touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting
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
                      Apply Application
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
                              Subject*
                            </Typography>
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              value={values.subject}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorMessage
                              name="subject"
                              component="div"
                              style={{ color: "red" }}
                            />
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
                              Security Level
                            </Typography>
                            <select
                            id="securityLevel"
                            name="securityLevel"
                            value={values.securityLevel}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                              <option value="1">Urgent</option>
                              <option value="2">Moderate</option>
                              <option value="3">Minor</option>
                            </select>
                            <ErrorMessage
                              name="securityLevel"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </label>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ width: "100%", paddingTop: "20px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={12}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{ fontSize: "15px" }}
                            >
                              Description*
                            </Typography>
                            <div style={{ maxHeight: "300px" }}>
                              <CKEditor
                                editor={ClassicEditor}
                                data={values.description}
                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  setFieldValue("description", data);
                                }}
                              />
                            </div>
                            <ErrorMessage
                              name="description"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </label>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={6}>
                          <label>
                            <Button
                              variant="contained"
                              component="label"
                              color="error"
                              style={{
                                alignItems: "center",
                                borderRadius: "none",
                              }}
                            >
                              Upload
                              <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                                onChange={(event) =>
                                  setFieldValue(
                                    "file",
                                    event.currentTarget.files[0]
                                  )
                                }
                              />
                            </Button>
                            <input
                              style={{ width: "84.4%" }}
                              type="text"
                              name="file"
                              id="file"
                              label="File"
                              placeholder="No file chosen"
                              value={
                                values.file ? values.file.name : ""
                              }
                              readOnly
                            />
                          </label>
                        </Grid>
                      </Grid>
                    </Box>

                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        textTransform: "none",
                        alignItems: "center",
                        marginBottom: "80px",
                        marginRight: "10px",
                      }}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button> 
                  </Container>
                </React.Fragment>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditProduct;
