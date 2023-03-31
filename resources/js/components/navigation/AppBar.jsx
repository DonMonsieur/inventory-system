import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import logo from "../images/nms.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function () {
    const navigate = useNavigate();

    function Index() {
        navigate("/");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: grey[900] }}>
                <Toolbar>
                    <Button onClick={Index}>
                        <img
                            src={logo}
                            alt="Logo"
                            width={"100px"}
                            sx={{ mr: 3 }}
                        />
                    </Button>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, ml: 3 }}
                    >
                        Inventory System
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
/* <Button color="inherit" sx={{ padding: "5px" }}>
Logout
</Button> */
