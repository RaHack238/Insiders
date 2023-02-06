import React from 'react';
import { 
  Table, 
  TableBody,
  TableCell, 
  TableContainer,
  TableHead,
  TableRow, } from "@material-ui/core";

const GradesTable = () => {
  
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

    return (
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
    );
  };
  
  export default GradesTable;
