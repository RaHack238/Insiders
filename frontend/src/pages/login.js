import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Grid from '@material-ui/core/Grid';
import '../styles/login.css';
import IITGoaLogo from '../images/iit_goa_logo.svg';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    //integration with backend
    function handleSubmit(e) {
        e.preventDefault();
    }
    
    return (

    <div className="login-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div 
            className='login-card'
            style={{
                marginTop: '7rem',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: '#C8C8C8',
                height: '70vh',
                width: '70vw',
            }}
        >

        <Grid
        container
        // spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ height: '100%' }}
        >

        <Grid item xs={6}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={IITGoaLogo} alt="IIT Goa Logo" width='60%' height='60%' />
            </div>
        </Grid>  

        <Grid item xs={6}
            style={{
                
                background: 'linear-gradient(to bottom, #BDFFF3, #4AC29A)',
                height: '100%',
                width: '100%',
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '0px 10px 10px 0px',
            }}>
            <div style={{}}>
                <h2 className="text-center"
                    style={{
                        fontFamily: 'Poppins',
                        color: '#00264d',
                    }}> 
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
                        <Button type="primary" htmlType="submit"
                            style={{
                                backgroundColor: '#00264d',
                                borderRadius: '15px',
                                width: '60%',
                                height: '100%',
                                fontFamily: 'Poppins'
                            }}>
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