import * as React from "react";
import Box from "@mui/material/Box";
import heroLogo from "./img/Hero2.png";

export default function Hero() {
    return (
        <Box className="Hero-section">
            <Box
                className="App-Hero"
                component="img"
                alt="HandyNow Logo."
                src={heroLogo}
            />
            <div>The handyman in your hand</div>
            <div>All repairs on one place</div>
        </Box>
    );
}
