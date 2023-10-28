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

export default function SignUp({handleNext}) {
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
            id="first_name"
            label="First Name"
            type="text"
            name="first_name"
            autoComplete="first_name"
            autoFocus
          />

          <TextField
            variant="standard"
            fullWidth
            name="last_name"
            label="Last Name"
            type="text"
            id="last_name"
            autoComplete="last_name"
          />

          <TextField
            variant="standard"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Grid className="flex gap-5">
            <TextField
              variant="standard"
              fullWidth
              id="sin"
              label="Social security number"
              name="sin"
              autoComplete="sin"
              autoFocus
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of birth"
                sx={{ width: "100%", svg: { color: "#1380FF" } }}
                slotProps={{
                  textField: { variant: "standard", fullWidth: true },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid className="flex gap-5">
            <TextField
              variant="standard"
              fullWidth
              id="state"
              label="State"
              name="state"
              autoComplete="state"
              autoFocus
            />

            <TextField
              variant="standard"
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
            />
          </Grid>
          <Grid className="flex gap-5">
            <TextField
              variant="standard"
              fullWidth
              id="zip_code"
              label="Zip code"
              name="zip_code"
              autoComplete="zip_code"
              autoFocus
            />

            <TextField
              variant="standard"
              fullWidth
              id="phone_number"
              label="Phone number"
              type="number"
              name="phone_number"
              autoComplete="phone_number"
              autoFocus
            />
          </Grid>
          <TextField
            variant="standard"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
          />
          <TextField
            variant="standard"
            fullWidth
            name="confirm_password"
            label="Confirm password"
            type="password"
            id="confirm_password"
            autoComplete="current-password"
          />

          <Grid className="w-full flex justify-center">
            <FormControlLabel
              className="mb-0 pb-0"
              control={<Checkbox value="remember" color="primary" />}
              label="I agree to terms and conditions"
            />
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
              Already have an account?{" "}
              <Link
                sx={{ textDecoration: "none" }}
                className="cursor-pointer"
                to="/"
              >
                Sign in
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
