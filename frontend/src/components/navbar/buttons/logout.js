import * as React from 'react';
import '../styles.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

export default function Logoutbutton() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("handleClick called");
        navigate("/");
        localStorage.removeItem('Authorization');
    };

    const handleClose = () => {
        console.log("handleClose called");
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                className='navbar navbar__item'
                style={{
                    color: '#00264d'
                }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="false"
                aria-expanded={open ? 'false' : undefined}
                onClick={handleClick}
            >
                Logout
            </Button>
            {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Edit My Details</MenuItem>
                <MenuItem onClick={handleClose}>Show My Details</MenuItem>
            </Menu> */}
        </div>
    );
}