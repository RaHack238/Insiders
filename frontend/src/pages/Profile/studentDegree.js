import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import DetailCard from "./detailCard";

const StudentDegreeDetails = () => {

    const studentDegreeContent = [
        {
            'title' : 'Student Branch',
            'value' : 'branch name'
        },
        {
            'title' : "Branch From Date",
            'value' : "DD-MM-YYYY"
        },
        {
            'title' : 'Student Type',
            'value' : 'Regular B.Tech'
        },
        {
            'title' : 'From Date',
            'value' : 'DD-MM-YYYY'
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
            Student Degree Details
        </Typography>

        <div className="detail-cards">
            <Grid container spacing={3}>
                {studentDegreeContent.map((item) => {   
                    return (
                            <Grid item xs={6}>
                                <DetailCard title={item.title} value={item.value} />
                            </Grid>)})}
            </Grid>
        </div>
    </div>
    );
};

export default StudentDegreeDetails;
