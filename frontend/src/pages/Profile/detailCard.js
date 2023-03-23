import React from "react";
import Box from "@mui/material/Box";
import './cardStyle.css';

const DetailCard = (props) => {

    return (
        <Box
            padding= "20px"
            height="auto"
            width= '50%'   
            sx={{  
                border: "1px solid #E4E4E7", 
                borderRadius: "10px",
                backgroundColor: "#a5bfd7",
            }}
        >
            <div className="main-heading" > 
                {props.title}
            </div>
            <div className="main-value" >
                {props.value}
            </div>
        </Box>
    );
};

export default DetailCard;
