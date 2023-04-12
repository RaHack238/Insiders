import React, { useState } from "react";
import { Grid, TextField, InputLabel, FormControl, Select, MenuItem, Button, Box } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './requestCard.css';
import Navbar from "../../components/navbar";

function RequestIDCard() {
    const [signature, setSignature] = useState("");
    const [image, setImage] = useState("");
    const [bloodGroup, setBloodGroup] = useState('');

    const bloodGroupData = [
        {
            'label' : 'AB Negative',
            'value': 1
        }, 
        {
            'label' : 'AB Positive',
            'value': 2
        },
        {
            'label' : 'B Negative',
            'value': 3
        },
        {
            'label' : 'B Positive',
            'value': 4
        },
        {
            'label' : 'A Negative',
            'value': 5
        },
    ]
    
    const handleBloodGroupChange = (e) => {
        setBloodGroup(e.target.value);
    };

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     let formData = new FormData();
    //     formData.append('file', this.file);
    //     console.log('>> formData >> ', formData);

    //     // You should have a server side REST API 
    //     axios.post('http://localhost:8080/restapi/fileupload',
    //         formData, {
    //             headers: {
    //             'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //         ).then(function () {
    //         console.log('Successfully added data!');
    //         })
    //         .catch(function () {
    //         console.log('Something went wrong, try again!');
    //         });
    // }

    return(
        <div>
            <Navbar />
            <div>
                <div className="id-card-heading">
                    <p> ID Request Form </p>
                </div>

                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <div className="content-box">
                            <Grid container spacing = {1.5} >
                                <Grid item xs={6} >
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Type: </p>
                                    </div>
                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Type" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Roll No: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Roll No." variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Date of Birth: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date of Birth" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Blood Group: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={bloodGroup}
                                                label="Blood Group"
                                                onChange={handleBloodGroupChange}
                                            >
                                                {bloodGroupData.map((bg) => {
                                                    return(
                                                        <MenuItem value={bg.value}>{bg.label}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Emergency Contact Number: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Contact No." variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Postal Address: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <textarea name="postalAddress" rows={6} cols={30} style={{borderColor: 'lightgray'}}/>
                                    </div>
                                </Grid>      

                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: '7rem'
                    }}>
                        <div style={{display: 'flex', marginBottom: '0.5rem'}}>
                            <div>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="150px"
                                    width="210px"
                                    maxHeight="150px"
                                    maxWidth="210px"
                                    minHeight="150px"
                                    minWidth="210px"
                                    sx={{
                                        border: "1px dashed grey",
                                        overflow: "hidden",
                                        objectFit: "contain",
                                        borderRadius: "8px",
                                    }}
                                >
                                    {signature ? (
                                        <div >
                                            <img src={URL.createObjectURL(signature)} height="100%" width="100%" />
                                        </div>
                                    ) : (
                                        <div style={{ fontSize: 12 }}>
                                            <p>Upload Signature</p>
                                        </div>
                                    )}
                                </Box>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <label htmlFor="select-signature" >
                                    <div className="upload-btn">
                                        Upload Signature
                                    </div>
                                </label>
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    id="select-signature"
                                    onChange={(e) => { setSignature(e.target.files[0]) }} 
                                />
                            </div>
                        </div>

                        <div style={{display: 'flex',  marginTop: '0.5rem'}}>
                            <div>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="150px"
                                    width="210px"
                                    maxHeight="150px"
                                    maxWidth="210px"
                                    minHeight="150px"
                                    minWidth="210px"
                                    sx={{
                                        border: "1px dashed grey",
                                        overflow: "hidden",
                                        objectFit: "contain",
                                        borderRadius: "8px",
                                    }}
                                >
                                    {image ? (
                                        <div >
                                            <img src={URL.createObjectURL(image)} height="100%" width="100%" />
                                        </div>
                                    ) : (
                                        <div style={{ fontSize: 12 }}>
                                            <p>Upload your Image</p>
                                        </div>
                                    )}
                                    </Box>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <label htmlFor="select-image" >
                                    <div className="upload-btn">
                                        Upload your Image
                                    </div>
                                </label>
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    id="select-image"
                                    onChange={(e) => { setImage(e.target.files[0]) }} 
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '3rem'
                }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                                backgroundColor: "#00264d",
                                borderRadius: "15px",
                                width: "10%",
                                height: "100%",
                                fontFamily: "Poppins",
                                color: 'white'
                            }}
                        // onClick={handleFormSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default RequestIDCard;