import React from "react";
import Grid from "@material-ui/core/Grid";
import { 
    Avatar, 
    Typography } from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import './styles.css';
import Navbar from "../../components/navbar";

const ProfilePage = () => {

    const profileDetailHeadings = [
        {
            'title': 'Personal Details',
            'url' : '/viewprofile/personalDetails',
        },
        {
            'title': 'Address Details',
            'url' : '/viewprofile/addressDetails',
        },
        {
            'title': 'Student Degree Details',
            'url' : '/viewprofile/studentDegree',
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
                                        <Link to={content.url} style={{ textDecoration: 'none' }}>
                                            <ListItem key={content.title} disablePadding style={{marginBottom: '0.5rem'}} >
                                                <ListItemButton
                                                    // style = {{backgroundColor: content.title === selectedButton ? '#1E4E92' : '', borderRadius: '4px'}}
                                                >
                                                    <ListItemText 
                                                        disableTypography 
                                                        style={{
                                                            fontWeight: 600,
                                                            color:'#00264d', 
                                                            fontFamily: "Poppins",
                                                            fontSize: 18,
                                                            paddingLeft: '1rem',
                                                            paddingRight: '1rem',
                                                            borderRadius: '20px',
                                                        }} 
                                                        primary={content.title} 
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                        ))}
                                    </div>
                                </List>
                            </div>
                        </div>
                </Grid>
        
                <Grid item xs={8}>
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    </div>
    );
};

export default ProfilePage;
