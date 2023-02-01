import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Grid from "@material-ui/core/Grid";
import "../styles/login.css";
import IITGoaLogo from "../images/iit_goa_logo.svg";
import zIndex from "@material-ui/core/styles/zIndex";

function LoginPage() {
<<<<<<< HEAD
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //integration with backend
  function handleSubmit(e) {
    console.log('zzz');
    e.preventDefault();
=======
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //integration with backend
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Handle submit called");
    //Sending username & password in json format to  http://127.0.0.1:5000 and recieve a jwt token.
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        //redirect to home page and set jwt token in local storage
        localStorage.setItem("Authorization", response.access_token);
        window.location.href = "/";
      } else {
        setError("Incorrect username or password");
      }
    });
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
  }

  return (
    <div
      className="login-page"
      style={{
<<<<<<< HEAD
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
        height: '100vh',
        width: '100vw',
=======
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5",
        height: "100vh",
        width: "100vw",
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
      }}
    >
      <div
        className="login-card"
        style={{
<<<<<<< HEAD
          marginTop: '4rem',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '#C8C8C8',
          borderRadius: '10px 10px 10px 10px',
          height: '70vh',
          width: '70vw',
=======
          marginTop: "4rem",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "10px",
          borderColor: "#C8C8C8",
          height: "70vh",
          width: "70vw",
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
        }}
      >
        <Grid
          container
          // spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
<<<<<<< HEAD
          style={{ height: '100%' }}
=======
          style={{ height: "100%" }}
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
        >
          <Grid
            item
            xs={6}
            style={{
<<<<<<< HEAD
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px 0px 0px 10px',
=======
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px 0px 0px 10px",
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
            }}
          >
            <img src={IITGoaLogo} alt="IIT Goa Logo" width="60%" height="60%" />
          </Grid>

          <Grid
            item
            xs={6}
            style={{
<<<<<<< HEAD
              backgroundColor: '#a5bfd7',
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0px 10px 10px 0px',
=======
              backgroundColor: "#a5bfd7",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0px 10px 10px 0px",
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
            }}
          >
            <div style={{}}>
              <h2
                className="text-center"
                style={{
<<<<<<< HEAD
                  fontFamily: 'Poppins',
                  color: '#00264d',
=======
                  fontFamily: "Poppins",
                  color: "#00264d",
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
                }}
              >
                Login
              </h2>
<<<<<<< HEAD
              <Form>
=======
              <Form onSubmit={handleSubmit}>
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
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
<<<<<<< HEAD
                    onSubmit={handleSubmit}
                    style={{
                      backgroundColor: '#00264d',
                      borderRadius: '15px',
                      width: '60%',
                      height: '100%',
                      fontFamily: 'Poppins',
=======
                    style={{
                      backgroundColor: "#00264d",
                      borderRadius: "15px",
                      width: "60%",
                      height: "100%",
                      fontFamily: "Poppins",
>>>>>>> 36afe077ce6281f026384d40a76da7fe3ab3ab21
                    }}
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
