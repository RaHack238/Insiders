import React from "react";
import { 
  Avatar, 
  Table, 
  TableBody,
  TableCell, 
  TableContainer,
  TableHead,
  TableRow,
  Typography } from "@material-ui/core";


function GradesPage(){

  const rows = [
    {
      'course' : 'Course Code 1',
      'courseTitle' : 'Course Name 1',
      'credits' : 'Course Credits 1',
      'registrationType': 'Registration Type 1',
      'electiveType' : 'Elective Type 1',
      'grade' : 'Grade 1'
    },
    {
      'course' : 'Course Code 2',
      'courseTitle' : 'Course Name 2',
      'credits' : 'Course Credits 2',
      'registrationType': 'Registration Type 2',
      'electiveType' : 'Elective Type 2',
      'grade' : 'Grade 2'
    }
  ];

  return(
    <div
      className="login-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="main-profile-table"
        style={{
          backgroundColor: "white",
          height: '80%',
          width: '90%',
          borderRadius: '10px'
        }}>

          <div 
            className="student-details"
            style={{
              backgroundColor: "#a5bfd7",
              height: '25%',
              marginTop: '1rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                marginLeft: '1rem',
                display: 'flex',
                height: '100%',
                width: '100%'
              }}>
                <div style={{
                  marginTop: '0.4rem'
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
          <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{
                    backgroundColor: '#00264d',
                  }}>
                    <TableCell style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                    }} align="center">
                      Course
                    </TableCell>
                    <TableCell style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                    }} align="right">Course Title</TableCell>
                    <TableCell style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                    }} align="right">Credits</TableCell>
                    <TableCell style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                    }} align="right">Registration Type</TableCell>
                    <TableCell style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                    }} align="right">Elective Type</TableCell>
                    <TableCell style={{
                      fontFamily: 'Poppins',
                      color: 'white',
                    }} align="right">Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }} component="th" scope="row">
                        {row.course}
                      </TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right">{row.courseTitle}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right">{row.credits}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right">{row.registrationType}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right">{row.electiveType}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right">{row.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

      </div>
    </div>
  )
}

export default GradesPage;