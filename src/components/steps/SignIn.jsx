import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function SignIn({setSignInPage, handleNext}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            variant="standard"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
         
          <TextField
            variant="standard"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <Grid className="w-full flex justify-start forgot-pass">
          Forgot password?
          </Grid>

          <button
            onClick={handleNext}
            type="submit"
            className="rounded-[1.25rem] py-3 px-10 w-full bg-[#1380FF] font-[spartan] font-[500] text-[1.2rem] text-[#FFF] uppercase"
          >
            Sign Up
          </button>
          <Grid className="w-full flex justify-center">
            <Typography>
              Don’t have an account?
              <div
                sx={{ textDecoration: "none" }}
                className="ml-2 cursor-pointer inline-block text-[#1380FF]"
                onClick={()=> setSignInPage(false)}
              >
                Sign Up here
              </div>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
