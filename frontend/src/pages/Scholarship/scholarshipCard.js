import React, { useState } from "react";
import { Grid, TextField, InputLabel, FormControl, Select, MenuItem, Button } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './scholarshipCard.css';
import Navbar from "../../components/navbar";

function ScholarshipCard() {
    
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

    return(
        <div>
            <Navbar />
            <div>
                <div className="id-card-heading">
                    <p> Scholarship Form </p>
                </div>

                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <div className="content-box">
                            <Grid container spacing = {1} >
                                <Grid item xs={6} >
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Have you  applied for any other Scholarships?: </p>
                                    </div>
                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Yes/No" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Organization Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem'}}>
                                        <p>From Date: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Have you getting any other Scholarship?: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Yes/No" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Organization Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem'}}>
                                        <p>From Date: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Bank Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem'}}>
                                        <p>Bank Branch Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <TextField id="outlined-basic" label="Branch" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Father's Occupation: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Occupation" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Mother's Occupation: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Occupation" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Guardian's Occupation: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Occupation" variant="outlined" />
                                    </div>
                                </Grid>
                                
                                    

                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingRight: '10rem'
                    }}>
                         <div className="content-box">
                            <Grid container spacing = {1} >
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Scholarship Amount: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Amount" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '6.5rem'}}>
                                        <p>From Date: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Scholarship Amount: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Amount" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '6rem'}}>
                                        <p>From Date: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Account Number: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Acc. No." variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem'}}>
                                        <p>IFSC Code: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <TextField id="outlined-basic" label="IFSC Code" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Father's Income: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Amount" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Mother's Income: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Amount" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Guardian's Income: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Income" variant="outlined" />
                                    </div>
                                </Grid>
                            </Grid>
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

export default ScholarshipCard;