import React from "react"; 
import "./button.css";

const Button = ({ text, textColor, backgroundColor, onClick }) => {
    const style = { color: `${textColor}`, backgroundColor };
    return ( 
        <button className="button" style={style} onClick={onClick}>{text}</button>
    )
};

export default Button;

// Building a resusable Button component for this application