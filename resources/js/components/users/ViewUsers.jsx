import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import logo from "../images/nms.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "userName", headerName: "User name", width: 130 },
    { field: "password", headerName: "Password", width: 150 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "email", headerName: "Email", width: 120, margin: 'auto' },
    {
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`
    },
];

const rows = [
    { id: 1, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 2, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 3, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 4, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 5, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 6, userName: "kevintom12345", password: 'natarakinak', name: "Tom", email: "Tom" },
    { id: 7, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 8, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
    { id: 9, userName: "kevintom12345", password: "natarakinak", name: "Tom", email: "Tom" },
];

export default function ViewUsers() {
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
            <div style={{ height: 500, width: "70%", margin: '90px auto  ' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Box>
    );
}
