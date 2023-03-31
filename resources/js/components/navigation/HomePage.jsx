import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import logo from "../images/nms.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function HomePage() {
    const navigate = useNavigate();

    function Index() {
        navigate("/");
    }

    function Inventory() {
        navigate("/inventory");
    }

    function AddUser() {
        navigate("/addUser");
    }
    function ViewUsers() {
        navigate("/users");
    }

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                sx={{ backgroundColor: grey[900] }}
                open={open}
            >
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
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="text" onClick={Inventory}>
                            View Inventory
                        </Button>
                        <Button variant="text" onClick={ViewUsers}>
                            View Users
                        </Button>
                        <Button variant="text" onClick={AddUser}>
                            Add Users
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

/**
 *
 *
 */
