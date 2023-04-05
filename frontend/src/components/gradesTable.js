import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    }
];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log(localStorage.getItem('Authorization') + ' is the token');
    axios.get('http://127.0.0.1:5000/viewGrades', {
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      }
    })
      .then(response => {
        console.log(response.data); // log the data to the console
        setData(response.data.grades);
      }).finally(() => {
        setLoading(false);
        console.log("final data ---------->"+data);
      })
      .catch(error => console.log(error));
  }, []);
  const mappedObjectOfObjects = Object.keys(data).map((key) => {
    return {
      ...data[key],
      id: key,
    };
  });
  
  console.log(mappedObjectOfObjects);
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
                  {rows.map((grade) => (
                    <TableRow
                      // key={grade.course_name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }} component="th" scope="row">
                        {grade.course_name}
                      </TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right"> {grade.course_name}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right"> {grade.credits}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right"> {grade.elective_type}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right"> {grade.elective_type}</TableCell>
                      <TableCell style={{
                        fontFamily: 'Poppins',
                        borderBottom: '1px solid #00264d',
                      }}align="right"> {grade.grade}</TableCell>
                    </TableRow>
                  )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
    );
  };
  
  export default GradesTable;
