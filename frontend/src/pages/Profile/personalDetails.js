import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import DetailCard from "./detailCard";

const PersonalDetails = () => {

    const personalDetailsContent = [
        {
            'title' : 'Student Name',
            'value' : 'Student Name'
        },
        {
            'title' : "Father's Name",
            'value' : "Father's Name"
        },
        {
            'title' : 'Roll Number',
            'value' : 'Roll No.'
        },
        {
            'title' : 'Date of Birth',
            'value' : 'DD-MM-YYYY'
        },
        {
            'title' : 'Email',
            'value' : 'student@iitgoa.ac.in'
        },
        {
            'title' : 'Blood Group',
            'value' : 'A+ve'
        },
        {
            'title' : 'Mobile Number',
            'value' : 'XXXXXXXXXX'
        },

    ];
    
    return (
    <div className="major-content">
        <Typography style={{
            fontFamily: "Poppins",
            color: "#00264d",
            fontSize: 24,
            fontWeight: 600,
        }}>
            Personal Details
        </Typography>

        <div className="detail-cards">
            <Grid container spacing={3}>
                {personalDetailsContent.map((item) => {   
                    return (
                            <Grid item xs={6}>
                                <DetailCard title={item.title} value={item.value} />
                            </Grid>)})}
            </Grid>
        </div>
    </div>
    );
};

export default PersonalDetails;
