import React from "react";
import "./Button.css";

const Button = ({children, onClick}) => {
    return ( <Button onClick={onClick} className="button">{children}</Button> );
}
 
export default Button;