import React from "react";
import Box from "@mui/material/Box";
import logo from "./img/logo2.png";

function Logo() {
    return (
        <Box
            className="App-Logo"
            component="img"
            alt="HandyNow Logo."
            src={logo}
        />
    );
}

export default Logo;
