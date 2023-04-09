import React, {useState, useEffect} from "react";
import axios from "axios";
import { 
  Avatar, 
  Typography } from "@material-ui/core";
import GradesTable from "../../components/gradesTable";
import './grades.css';
import Navbar from "../../components/navbar";


function GradesPage(){

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
        setData(response.data);
      })
      .finally(() => setLoading(false))
      .catch(error => console.log(error));
  }, []);

  const gradesData = data["grades"];
  const userData = data["user"];
  console.log("**** gradesData:   ", gradesData);
  console.log("**** userData: ", userData);

  return(
    <div>
      {loading ? "Loading..." : <div>
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
                display: 'flex',
                height: '100%',
                width: '100%',
                marginBottom: '1rem',
              }}>
                <div style={{
                  marginTop: '1rem',
                  marginLeft: '1rem',
                }}>
                  <Avatar style={{
                    width: 130,
                    height: 130,
                    textTransform: 'uppercase',
                    fontSize: 50
                  }}>
                    {userData ? userData['name'][0] : ""}
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
                    {userData ? userData['name'] : ""}
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    <b>Roll Number:</b> {userData ? userData['student_id'] : ""}
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    <b>Branch Name:</b> {userData ? userData['department'] : ""}
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    <b>Student Type:</b> {userData ? userData['batch'] : ""}
                  </Typography>
                  <Typography style={{
                    fontFamily: "Poppins",
                    color: "#00264d",
                    fontSize: 16,
                  }}>
                    <b>Contact Number:</b> {userData ? userData['contact'] : ""}
                  </Typography>
                </div>
              </div>
          </div>

          <div className="grades-table">
            <GradesTable gradesData={gradesData} />
          </div>

      </div>
    </div>
    </div>}
    </div>

  )
}

export default GradesPage;