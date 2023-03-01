import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { 
    Avatar, 
    Typography } from "@material-ui/core";
import './styles.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
        <div className="profile-card">
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ height: "100%" }}
            >
            <Grid item xs={6} style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px 0px 0px 10px",
                }}>
                <div className="profile-card-content" style={{
                      fontFamily: 'Poppins'
                    }}>
                Student Name : XYZ XYZ
                <br/>
                Father Name : XYZ XYZ
                <br/>
                RollNo :1903105
                <br/>
                RollNo. Activated Date :29 Jul, 2019
                <br/>
                Date Of Birth :09 Sep, 2001
                <br/>
                Email : XYZ@IITGOA.AC.IN
                <br/>
                Alternate Email : xyz@gmail.com
                <br/>
                Mobile No : 8957484280
                <br/>
                Alternate Mobile No :8957484280
                <br/>
                Mother Tongue : Unspecified
                <br/>
                Blood Group : A Positive
                <br/>
                Gender : Male
                <br/>
                Is Physical Challenged : No
                <br/>
                Ph Description :
                <br/>
                Birth Category : General
                <br/>
                Admission Allotted To Different Category : No
                <br/>
                Allotted Category : General
                <br/>
                Student Status:
                <br/>
                Nationality : Indian
                <br/>
                Religion :Unspecified
                </div>
            </Grid>

            <Grid
                item
                xs={6}
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "0px 10px 10px 0px",
                }}
            >
                <div>
                    <Avatar style={{
                    width: 130,
                    height: 130
                  }}>
                        SN
                    </Avatar>
                </div>
                <div className="profile-card-content" style={{
                      fontFamily: 'Poppins'
                    }}>
                    Marital Status : Unspecified
                    <br/>
                    Guardian Name :
                    <br/>
                    Relation With Guardian :
                    <br/>
                    Name :
                    <br/>
                    Parent Email Id : xyz@gmail.com
                    <br/>
                    Guardian Mobile No : 8957484280
                </div>
            </Grid>
        </Grid>
        </div>
    </div>
  );
};

export default ProfilePage;
