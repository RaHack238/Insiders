import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import IITGoaLogo from "../images/iit_goa_logo.svg";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

  //integration with backend

  const handleSubmit = e => {
    e.preventDefault();

    //Sending username & password in json format to  http://127.0.0.1:5000 and recieve a jwt token.
    const payload = {
      username: username,
      password: password
    }
    console.log(payload);
    axios.post('http://127.0.0.1:5000/login', payload)
    .then(function (response) {
      //if the token is recieved then redirect to the dashboard page.
      if(response.status === 200){
        localStorage.setItem('Authorization', response.data.access_token);
        const tkn=localStorage.getItem('Authorization');
        console.log(tkn);
        navigate("/viewgrades");
      }else{
        setError("Invalid Credentials");
      }
    })

    
  }

    return (
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
            className="login-card"
            style={{
            marginTop: "4rem",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "10px",
            borderColor: "#C8C8C8",
            height: "70vh",
            width: "70vw",
            }}
        >
            <Grid
            container
            // spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ height: "100%" }}
            >
            <Grid
                item
                xs={6}
                style={{
                height: "100%",
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px 0px 0px 10px",
                }}
            >
                <img src={IITGoaLogo} alt="IIT Goa Logo" width="60%" height="60%" />
            </Grid>

          <Grid
            item
            xs={6}
            style={{
              backgroundColor: "#a5bfd7",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <div style={{}}>
              <h2
                className="text-center"
                style={{
                  fontFamily: "Poppins",
                  color: "#00264d",
                }}
              >
                Login
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Item>
                  <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                {error && <div className="error">{error}</div>}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      backgroundColor: "#00264d",
                      borderRadius: "15px",
                      width: "60%",
                      height: "100%",
                      fontFamily: "Poppins",
                    }}
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LoginPage;
