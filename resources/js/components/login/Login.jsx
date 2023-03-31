import Styles from "../../../css/SignIn.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Login() {
    return (
        <Box className="box">
            <Stack spacing={2} sx={{ width: "80%", marginBottom: "20px" }}>
                <AccountCircleIcon
                    sx={{
                        color: "primary.main",
                        fontSize: "100px",
                        marginX: "auto",
                        marginTop: "50px",
                    }}
                />
                <Typography variant="h4" align="center" gutterBottom>
                    Sign in
                </Typography>
                <TextField
                    id="username-input"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    id="password-input"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                />
                <Button
                    style={{
                        width: "30%",
                        margin: "0 auto",
                        marginTop: "15px",
                    }}
                    variant="contained"
                >
                    Sign In
                </Button>

                <Link component="button" variant="body2" align="right">
                    Forgot password?
                </Link>
            </Stack>
        </Box>
    );
}
