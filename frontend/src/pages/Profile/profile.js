import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { 
    Avatar, 
    Typography } from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './styles.css';
import Navbar from "../../components/navbar";
import DetailCard from "./detailCard";

const ProfilePage = () => {

    const profileDetailHeadings = [
        {
            'title': 'Personal Details',
            'url' : ''
        },
        {
            'title': 'Address Details',
            'url' : ''
        },
        {
            'title': 'Student Degree Details',
            'url' : ''
        },
        {
            'title': 'Guide Details',
            'url' : ''
        }
    ];

    const personalDetails = [
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
    <div>
        <Navbar />
    <div className="profile-page">

        <Grid container spacing={2}>
            <Grid item xs={4}>
                <div className="side-content">
                    <div className="side-avatar">
                        <Avatar style={{
                            width: 130,
                            height: 130
                        }}>
                                SN
                        </Avatar>
                    </div>
                    
                    <div className="text-content">
                        <Typography style={{
                            fontFamily: "Poppins",
                            color: "#00264d",
                            fontSize: 20,
                            fontWeight: 600,
                        }}>
                            Student Name
                        </Typography>
                        <Typography style={{
                            fontFamily: "Poppins",
                            color: "#00264d",
                            fontSize: 18
                        }}>
                            studentmail@iitgoa.ac.in
                        </Typography>
                    </div>

                    <div className="sidebar-list">
                        <List>
                            <div>
                            {profileDetailHeadings.map((content) => (
                                <ListItem key={content.title} disablePadding style={{marginBottom: '0.5rem'}} >
                                <ListItemButton
                                    // style = {{backgroundColor: content.title === selectedButton ? '#1E4E92' : '', borderRadius: '4px'}}
                                    >
                                    <ListItemText 
                                    disableTypography 
                                    style={{
                                        marginLeft: '2rem',
                                        fontWeight: 600,
                                        color:'#00264d', 
                                        fontFamily: "Poppins",
                                        fontSize: 18
                                    }} 
                                    primary={content.title} />
                                </ListItemButton>
                                </ListItem>))}
                            </div>
                        </List>
                    </div>
                </div>
            </Grid>
            <Grid item xs={8}>
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
                            {personalDetails.map((item) => {   
                                return (
                                    <Grid item xs={6}>
                                        <DetailCard title={item.title} value={item.value} />
                                    </Grid>)})}
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
        
    </div>
    </div>
    );
};

export default ProfilePage;
