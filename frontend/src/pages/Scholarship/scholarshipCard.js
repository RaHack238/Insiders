import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, InputLabel, FormControl, Select, MenuItem, Button, Box } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './scholarshipCard.css';
import Navbar from "../../components/navbar";

function ScholarshipCard() {

    const [scholarshipApplied, setScholarshipApplied] = useState("");
    const [scholarshipAmountApplied, setScholarshipAmountApplied] = useState("");
    const [organizationApplied, setOrganizationApplied] = useState("");
    const [fromDateApplied, setFromDateApplied] = useState(new Date());
    const [toDateApplied, setToDateApplied] = useState(new Date());
    const [scholarshipAwarded, setScholarshipAwarded] = useState("");
    const [scholarshipAmountAwarded, setScholarshipAmountAwarded] = useState("");
    const [organizationAwarded, setOrganizationAwarded] = useState("");
    const [fromDateAwarded, setFromDateAwarded] = useState(new Date());
    const [toDateAwarded, setToDateAwarded] = useState(new Date());
    const [bankName, setBankName] = useState("");
    const [bankBranch, setBankBranch] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [fatherOccupation, setFatherOccupation] = useState("");
    const [fatherIncome, setFatherIncome] = useState("");
    const [motherOccupation, setMotherOccupation] = useState("");
    const [motherIncome, setMotherIncome] = useState("");
    const [guardianOccupation, setGuardianOccupation] = useState("");
    const [guardianIncome, setGuardianIncome] = useState("");
    
    const [other, setOther] = useState("");
    const [bpb, setBpb] = useState("");
    const [bs, setBs] = useState("");
    const [form16, setForm16] = useState("");
    const [formsch01c, setFormsch01c] = useState("");
    const [formsch01b, setFormsch01b] = useState("");
    const [formsch01a, setFormsch01a] = useState("");
    const [formic, setFormic] = useState("");

    function handleScholarshipSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append('otherAppliedScholarships', scholarshipApplied);
        formData.append('otherAppliedScholarshipsAmount', scholarshipAmountApplied);
        formData.append('otherAppliedScholarshipsOrganization', organizationApplied);
        formData.append('otherAppliedScholarshipsStartDate', fromDateApplied);
        formData.append('otherAppliedScholarshipsEndDate', toDateApplied);
        formData.append('ongoingScholarships', scholarshipAwarded);
        formData.append('ongoingScholarshipsAmount', scholarshipAmountAwarded);
        formData.append('ongoingScholarshipsOrganization', organizationAwarded);
        formData.append('ongoingScholarshipsStartDate', fromDateAwarded);
        formData.append('ongoingScholarshipsEndDate', toDateAwarded);
        formData.append('bankName', bankName);
        formData.append('bankAccountNumber', accountNumber);
        formData.append('bankIFSC', ifscCode);
        formData.append('bankBranch', bankBranch);
        formData.append('fatherOccupation', fatherOccupation);
        formData.append('fatherIncome', fatherIncome);
        formData.append('motherOccupation', motherOccupation);
        formData.append('motherIncome', motherIncome);
        formData.append('guardianOccupation', guardianOccupation);
        formData.append('guardianIncome', guardianIncome);
        // formData.append('other', other);
        // formData.append('bpb', bpb);
        // formData.append('bs', bs);
        // formData.append('form16', form16);
        // formData.append('formsch01c', formsch01c);
        // formData.append('formsch01b', formsch01b);
        // formData.append('formsch01a', formsch01a);
        // formData.append('formic', formic);

        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        axios.post('http://127.0.0.1:5000/submitScholarship',
            formData, {
                headers: {
                    'Authorization': localStorage.getItem('Authorization'),
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(function () {
                console.log('Successfully added data!');
            })
            .catch(function () {
                console.log('Something went wrong, try again!');
            });
    }

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
                                        <TextField id="outlined-basic" label="Yes/No" variant="outlined"
                                        onChange={(event) => {setScholarshipApplied(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Organization Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined"
                                        onChange={(event) => {setOrganizationApplied(event.target.value)}} />
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
                                                <DatePicker label="Date" 
                                                selected={fromDateApplied} onChange={fromDateApplied => setFromDateApplied(fromDateApplied)}/>
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Are you awarded any other Scholarship?: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Yes/No" variant="outlined" 
                                        onChange={(event) => {setScholarshipAwarded(event.target.value)}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Organization Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Name" variant="outlined"
                                        onChange={(event) => {setOrganizationAwarded(event.target.value)}} />
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
                                                <DatePicker label="Date" 
                                                selected={fromDateAwarded} onChange={fromDateAwarded => setFromDateAwarded(fromDateAwarded)} />
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
                                        <TextField id="outlined-basic" label="Name" variant="outlined" 
                                        onChange={(event) => {setBankName(event.target.value)}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem'}}>
                                        <p>Bank Branch Name: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <TextField id="outlined-basic" label="Branch" variant="outlined"
                                        onChange={(event) => {setBankBranch(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Father's Occupation: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Occupation" variant="outlined"
                                        onChange={(event) => {setFatherOccupation(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Mother's Occupation: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Occupation" variant="outlined"
                                        onChange={(event) => {setMotherOccupation(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Guardian's Occupation: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <TextField id="outlined-basic" label="Occupation" variant="outlined"
                                        onChange={(event) => {setGuardianOccupation(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-other" >
                                                <div className="upload-btn">
                                                    Upload Other
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-other"
                                                onChange={(e) => { setOther(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {other ? (
                                                <div >
                                                    <img src={URL.createObjectURL(other)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12 }}>
                                                    <p>Other Attachments If Any</p>
                                                </div>
                                            )}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-bs" >
                                                <div className="upload-btn">
                                                    Upload BS
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-bs"
                                                onChange={(e) => { setBs(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {bs ? (
                                                <div >
                                                    <img src={URL.createObjectURL(bs)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12 }}>
                                                    <p>Bank Statement for Pensioners</p>
                                                </div>
                                            )}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-formsch01c" >
                                                <div className="upload-btn">
                                                    Upload Form Sch.01 (C)
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-formsch01c"
                                                onChange={(e) => { setFormsch01c(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {formsch01c ? (
                                                <div >
                                                    <img src={URL.createObjectURL(formsch01c)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12, textAlign: "center" }}>
                                                    <p>Annual Income Certificate for Pensioners</p>
                                                </div>
                                            )}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-formsch01a" >
                                                <div className="upload-btn">
                                                    Upload Form Sch.01 (A)
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-formsch01a"
                                                onChange={(e) => { setFormsch01a(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {formsch01a ? (
                                                <div >
                                                    <img src={URL.createObjectURL(formsch01a)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12, textAlign: "center" }}>
                                                    <p>Annual Salary Certificate for Salaried Class</p>
                                                </div>
                                            )}
                                        </Box>
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
                                        <TextField id="outlined-basic" label="Amount" variant="outlined"
                                        onChange={(event) => {setScholarshipAmountApplied(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '6.5rem'}}>
                                        <p>To Date: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date"
                                                    selected={toDateApplied} onChange={toDateApplied => setToDateApplied(toDateApplied)}  />
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
                                        <TextField id="outlined-basic" label="Amount" variant="outlined"
                                        onChange={(event) => {setScholarshipAmountAwarded(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '6rem'}}>
                                        <p>To Date: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                <div style={{marginLeft: '1rem', marginBottom: '1.5rem'}}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date" 
                                                selected={toDateAwarded} onChange={toDateAwarded => setToDateAwarded(setToDateAwarded)} />
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
                                        <TextField id="outlined-basic" label="Acc. No." variant="outlined"
                                        onChange={(event) => {setAccountNumber(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem'}}>
                                        <p>IFSC Code: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <TextField id="outlined-basic" label="IFSC Code" variant="outlined"
                                        onChange={(event) => {setIfscCode(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Father's Income: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Amount" variant="outlined"
                                        onChange={(event) => {setFatherIncome(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Mother's Income: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
                                        <TextField id="outlined-basic" label="Amount" variant="outlined"
                                        onChange={(event) => {setMotherIncome(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <p>Guardian's Income: </p>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem', marginBottom: '2rem'}}>
                                        <TextField id="outlined-basic" label="Income" variant="outlined"
                                        onChange={(event) => {setGuardianIncome(event.target.value)}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-bpb" >
                                                <div className="upload-btn">
                                                    Upload BPB
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-bpb"
                                                onChange={(e) => { setBpb(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {bpb ? (
                                                <div >
                                                    <img src={URL.createObjectURL(bpb)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12, textAlign: "center" }}>
                                                    <p>Front page of bank passbook/internet account statement for beneficiary account details</p>
                                                </div>
                                            )}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-form16" >
                                                <div className="upload-btn">
                                                    Upload Form 16
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-form16"
                                                onChange={(e) => { setForm16(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {form16 ? (
                                                <div >
                                                    <img src={URL.createObjectURL(form16)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12 }}>
                                                    <p>Tax certificate form 16/16A</p>
                                                </div>
                                            )}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-formsch01b" >
                                                <div className="upload-btn">
                                                    Upload Form Sch.01 (B)
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-formsch01b"
                                                onChange={(e) => { setFormsch01b(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {formsch01b ? (
                                                <div >
                                                    <img src={URL.createObjectURL(formsch01b)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12 }}>
                                                    <p>Affidavit</p>
                                                </div>
                                            )}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <label htmlFor="select-formic" >
                                                <div className="upload-btn">
                                                    Upload Form IC
                                                </div>
                                            </label>
                                            <input
                                                style={{ display: "none" }}
                                                type="file"
                                                id="select-formic"
                                                onChange={(e) => { setFormic(e.target.files[0]) }} 
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginLeft: '1rem'}}>
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
                                            }}>
                                                {formic ? (
                                                <div >
                                                    <img src={URL.createObjectURL(formic)} height="100%" width="100%" />
                                                </div>
                                            ) : (
                                                <div style={{ fontSize: 12 }}>
                                                    <p>Income Certificate from local District Authorities</p>
                                                </div>
                                            )}
                                        </Box>
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
                        onClick={handleScholarshipSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default ScholarshipCard;