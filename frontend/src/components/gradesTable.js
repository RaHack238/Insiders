import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody,
  TableCell, 
  TableContainer,
  TableHead,
  TableRow, } from "@material-ui/core";

const GradesTable = (gradesData) => {

  const grades = gradesData.gradesData; 
  console.log("**** gradesData:   ", grades);
  
const rows = [
      {
        "course_name": "course_10",
        "credits": "4",
        "description": "NA",
        "elective_type": "NA",
        "grade": "F",
        "sem": "2"
    },
    {
        "course_name": "course_10",
        "credits": "4",
        "description": "NA",
        "elective_type": "NA",
        "grade": "A",
        "sem": "2"
    },
    {
        "course_name": "course_10",
        "credits": "4",
        "description": "NA",
        "elective_type": "NA",
        "grade": "A",
        "sem": "2"
    },
    {
      "course_name": "course_3",
      "credits": "4",
      "description": "NA",
      "elective_type": "NA",
      "grade": "B+",
      "sem": "4"
  },
  {
      "course_name": "course_3",
      "credits": "4",
      "description": "NA",
      "elective_type": "NA",
      "grade": "F",
      "sem": "4"
  },
  {
      "course_name": "course_3",
      "credits": "4",
      "description": "NA",
      "elective_type": "NA",
      "grade": "A+",
      "sem": "4"
  },
  {
      "course_name": "course_3",
      "credits": "4",
      "description": "NA",
      "elective_type": "NA",
      "grade": "A",
      "sem": "4"
  },
  {
    "course_name": "course_8",
    "credits": 2,
    "description": "NA",
    "elective_type": "NA",
    "grade": "F",
    "sem": 5
},
{
    "course_name": "course_8",
    "credits": "2",
    "description": "NA",
    "elective_type": "NA",
    "grade": "B",
    "sem": "5"
},
{
  "course_name": "course_4",
  "credits": "2",
  "description": "NA",
  "elective_type": "NA",
  "grade": "A",
  "sem": "7"
},
{
  "course_name": "course_3",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "B+",
  "sem": "7"
},
{
  "course_name": "course_3",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "F",
  "sem": "7"
},
{
  "course_name": "course_3",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "A+",
  "sem": "7"
},
{
  "course_name": "course_3",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "A",
  "sem": "7"
},
{
  "course_name": "course_14",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "F",
  "sem": "8"
},
{
  "course_name": "course_14",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "F",
  "sem": "8"
},
{
  "course_name": "course_14",
  "credits": "4",
  "description": "NA",
  "elective_type": "NA",
  "grade": "F",
  "sem": "8"
}
];

    return (
      <div>
        {Object.keys(grades).map((semester, i) => (
        <div>
          <div style={{
            textAlign: 'center',
            fontFamily: "Poppins",
            color: "#00264d",
            background: "#a5bfd7",
            fontSize: 30 }}>
              {semester}
          </div>
            <TableContainer>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                  <TableHead>
                    <TableRow style={{
                      backgroundColor: '#00264d',
                    }}>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        color: 'white',
                      }} align="center">Course Title</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        color: 'white',
                      }} align="center">Credits</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        color: 'white',
                      }} align="center">Registration Type</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        color: 'white',
                      }} align="center">Elective Type</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        color: 'white',
                      }} align="center">Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  {Object.keys(grades[semester]).map((course, i) => (
                  <TableBody>
                      <TableRow
                        // key={grade.course_name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell style={{
                          fontFamily: 'Poppins',
                          borderBottom: '1px solid #00264d',
                        }}align="center"> {course}</TableCell>
                        <TableCell style={{
                          fontFamily: 'Poppins',
                          borderBottom: '1px solid #00264d',
                        }}align="center"> {grades[semester][course]['credits']}</TableCell>
                        <TableCell style={{
                          fontFamily: 'Poppins',
                          borderBottom: '1px solid #00264d',
                        }}align="center"> {grades[semester][course]['description']}</TableCell>
                        <TableCell style={{
                          fontFamily: 'Poppins',
                          borderBottom: '1px solid #00264d',
                        }}align="center"> {grades[semester][course]['elective_type']}</TableCell>
                        <TableCell style={{
                          fontFamily: 'Poppins',
                          borderBottom: '1px solid #00264d',
                        }}align="center"> {grades[semester][course]['grade']}</TableCell>
                      </TableRow>
                  </TableBody>
                  ))}
                </Table>
              </TableContainer>
          
          
          </div>
        ))}
      </div>
          
    );
  };
  
  export default GradesTable;
