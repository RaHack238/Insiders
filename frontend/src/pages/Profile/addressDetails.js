import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import DetailCard from "./detailCard";

const AddressDetails = () => {

    const addressDetailsContent = [
        {
            'title' : 'Address Type',
            'value' : 'address'
        },
        {
            'title' : "State",
            'value' : "state"
        },
        {
            'title' : 'Country',
            'value' : 'country'
        },
        {
            'title' : 'Zip Code',
            'value' : 'XXXXXX'
        },
        {
            'title' : 'From',
            'value' : 'DD-MM-YYYY'
        },
        {
            'title' : 'Address',
            'value' : 'address in detail'
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
            Address Details
        </Typography>

        <div className="detail-cards">
            <Grid container spacing={3}>
                {addressDetailsContent.map((item) => {   
                    return (
                            <Grid item xs={6}>
                                <DetailCard title={item.title} value={item.value} />
                            </Grid>)})}
            </Grid>
        </div>
    </div>
    );
};

export default AddressDetails;
