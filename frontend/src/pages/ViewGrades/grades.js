import React from "react";
import { 
  Avatar, 
  Typography } from "@material-ui/core";
import GradesTable from "../../components/gradesTable";
import './grades.css';
import Navbar from "../../components/navbar";


function GradesPage(){

  return(
    <div>
    <Navbar />
    <div
      className="grades-page"
    >
      <div
        className="main-profile-table"
      >

          <div 
            className="student-details"
          >
              <div style={{
                marginLeft: '1rem',
                display: 'flex',
                height: '100%',
                width: '100%'
              }}>
                <div style={{
                  marginTop: '1rem'
                }}>
                  <Avatar style={{
                    width: 130,
                    height: 130
                  }}>
                    SN
                  </Avatar>
                </div>
                <div style={{
                  marginLeft: '2.5rem',
                  marginTop: '1rem',
                  width: '100% !important'
                }}>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 30
                  }}>
                    Student Name
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    Roll Number: 
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    Branch Name: 
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    Student Type:
                  </Typography>
                </div>
              </div>
          </div>

          <div className="grades-table">
            <GradesTable />
          </div>

      </div>
    </div>
    </div>
  )
}

export default GradesPage;