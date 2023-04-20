import React from "react";
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@material-ui/core";
import { 
    Table, 
    TableBody,
    TableCell, 
    TableContainer,
    TableHead,
    TableRow, } from "@material-ui/core";
  

const RelevantCourses = () => {

    return (
        <div className="major-content">
            <div className="course-type-box">
                <div>
                    <Typography style={{
                        fontFamily: "Poppins",
                        color: "#00264d",
                        fontSize: 24,
                        fontWeight: 600,
                    }}>
                        Program Elective
                    </Typography>
                </div>

                <div className="course-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{
                                    backgroundColor: '#00264d',
                                }}>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Code</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Title</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Instructor</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Credits</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Selected</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    // key={grade.course_name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> CS435 </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Deep Learning </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Dr. Shitala Prasad </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> 4 </TableCell>
                                    <TableCell style={{
                                        fontFamily: 'Poppins',
                                        borderBottom: '1px solid #00264d',
                                    }} align="center"> 
                                        <Checkbox  /> 
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div className="course-type-box">
                <div>
                    <Typography style={{
                        fontFamily: "Poppins",
                        color: "#00264d",
                        fontSize: 24,
                        fontWeight: 600,
                    }}>
                        Open Elective
                    </Typography>
                </div>

                <div className="course-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{
                                    backgroundColor: '#00264d',
                                }}>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Code</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Title</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Instructor</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Credits</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Selected</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    // key={grade.course_name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> CS435 </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Deep Learning </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Dr. Shitala Prasad </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> 4 </TableCell>
                                    <TableCell style={{
                                        fontFamily: 'Poppins',
                                        borderBottom: '1px solid #00264d',
                                    }} align="center"> 
                                        <Checkbox  /> 
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

            <div className="course-type-box">
            <div>
                    <Typography style={{
                        fontFamily: "Poppins",
                        color: "#00264d",
                        fontSize: 24,
                        fontWeight: 600,
                    }}>
                        Minor Elective
                    </Typography>
                </div>

                <div className="course-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{
                                    backgroundColor: '#00264d',
                                }}>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Code</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Title</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Instructor</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Credits</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Selected</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    // key={grade.course_name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> CS435 </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Deep Learning </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Dr. Shitala Prasad </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> 4 </TableCell>
                                    <TableCell style={{
                                        fontFamily: 'Poppins',
                                        borderBottom: '1px solid #00264d',
                                    }} align="center"> 
                                        <Checkbox  /> 
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>

            <div className="course-type-box">
            <div>
                    <Typography style={{
                        fontFamily: "Poppins",
                        color: "#00264d",
                        fontSize: 24,
                        fontWeight: 600,
                    }}>
                        Audit Course
                    </Typography>
                </div>

                <div className="course-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{
                                    backgroundColor: '#00264d',
                                }}>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Code</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Title</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Instructor</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Credits</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Selected</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    // key={grade.course_name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> CS435 </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Deep Learning </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Dr. Shitala Prasad </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> 4 </TableCell>
                                    <TableCell style={{
                                        fontFamily: 'Poppins',
                                        borderBottom: '1px solid #00264d',
                                    }} align="center"> 
                                        <Checkbox  /> 
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                
                <div className="course-type-box">
            <div>
                    <Typography style={{
                        fontFamily: "Poppins",
                        color: "#00264d",
                        fontSize: 24,
                        fontWeight: 600,
                    }}>
                        Overload Course
                    </Typography>
                </div>

                <div className="course-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{
                                    backgroundColor: '#00264d',
                                }}>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Code</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Title</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Instructor</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Credits</TableCell>
                                <TableCell style={{
                                    fontFamily: 'Poppins',
                                    color: 'white',
                                }} align="center">Course Selected</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    // key={grade.course_name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> CS435 </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Deep Learning </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> Dr. Shitala Prasad </TableCell>
                                    <TableCell style={{
                                    fontFamily: 'Poppins',
                                    borderBottom: '1px solid #00264d',
                                    }}align="center"> 4 </TableCell>
                                    <TableCell style={{
                                        fontFamily: 'Poppins',
                                        borderBottom: '1px solid #00264d',
                                    }} align="center"> 
                                        <Checkbox  /> 
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>                        
                </div>
            </div>
        </div>
        
    );
};

export default RelevantCourses;
