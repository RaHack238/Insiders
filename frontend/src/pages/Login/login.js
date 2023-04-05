import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import './styles.css';
import IITGoaLogo from "../../images/iit_goa_logo.svg";
import axios from 'axios';

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Handle submit called");

        //Sending username & password in json format to  http://127.0.0.1:5000 and recieve a jwt token.
        const payload = {
            username: username,
            password: password,
        }
        axios.post("http://127.0.0.1:5000/login", payload, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                //redirect to home page and set jwt token in local storage
                localStorage.setItem("Authorization", "Bearer " + response.data.access_token);
                navigate("/viewgrades");
            } else {
                setError("Incorrect username or password");
            }
        }).catch((error) => {
            setError("Something went wrong. Please try again later.");
        });

    }

    return (
        <div
            className="login-page"
        >
            <div
                className="login-card"
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
                                {error && <div className="error" style={{ marginBottom: '1rem' }}>{error}</div>}
                                <Form.Item>
                                    <div className="text-center">
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
                                    </div>
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
