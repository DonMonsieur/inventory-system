import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import logo from "../images/nms.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Index from "../router/Index";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: grey[900],
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(Name, Quantity, Unit, Status) {
    return { Name, Quantity, Unit, Status };
}

const rows = [
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
    createData("Rice", 1.0, "kg", 1),
];

export default function Inventory() {
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
            <Box sx={{ marginTop: "70px" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">
                                Quantity
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Unit
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Status
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.Name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.Name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.Quantity}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.Unit}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.Status}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
}
