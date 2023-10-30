import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { postData } from "../../utils/fetchData";
import { ColorRing } from "react-loader-spinner";

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  ss_number: "",
  dob: null,
  state: "",
  city: "",
  zip_code: "",
  phone: "",
  password: "",
  confirm_password: "",
  agreeToTerms: false,
};
export default function SignUp({ setSignInPage, handleNext }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = {};

    // Validate each field
    for (const key in formData) {
      if (!formData[key]) {
        formErrors[key] = "This field is required";
      }
    }

    if (Object.keys(formErrors).length > 0) {
      // If there are errors, set the errors state and prevent form submission
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    const response = await postData("auth/register", formData);

    if (response.newUser) {
      setFormData(initState);
      handleNext();
    }
    console.log("Form Data:", response);
    setLoading(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
    // Clear the error for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
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
            value={formData.first_name}
            onChange={handleChange}
            error={Boolean(errors.first_name)}
            helperText={errors.first_name}
          />

          <TextField
            variant="standard"
            fullWidth
            name="last_name"
            label="Last Name"
            type="text"
            id="last_name"
            autoComplete="last_name"
            value={formData.last_name}
            onChange={handleChange}
            error={Boolean(errors.last_name)}
            helperText={errors.last_name}
          />

          <TextField
            variant="standard"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <Grid className="flex gap-5">
            <TextField
              variant="standard"
              fullWidth
              id="ss_number"
              label="Social security number"
              name="ss_number"
              autoComplete="ss_number"
              autoFocus
              value={formData.ss_number}
              onChange={handleChange}
              error={Boolean(errors.ss_number)}
              helperText={errors.ss_number}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of birth"
                sx={{ width: "100%", svg: { color: "#1380FF" } }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    fullWidth: true,
                    error: Boolean(errors.dob),
                    helperText: errors.dob,
                  },
                }}
                value={formData.dob}
                onChange={(date) => setFormData({ ...formData, dob: date })}
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
              value={formData.state}
              onChange={handleChange}
              error={Boolean(errors.state)}
              helperText={errors.state}
            />

            <TextField
              variant="standard"
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
              value={formData.city}
              onChange={handleChange}
              error={Boolean(errors.city)}
              helperText={errors.city}
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
              value={formData.zip_code}
              onChange={handleChange}
              error={Boolean(errors.zip_code)}
              helperText={errors.zip_code}
            />

            <TextField
              variant="standard"
              fullWidth
              id="phone"
              label="Phone number"
              type="number"
              name="phone"
              autoComplete="phone"
              autoFocus
              value={formData.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
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
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <TextField
            variant="standard"
            fullWidth
            name="confirm_password"
            label="Confirm password"
            type="password"
            id="confirm_password"
            autoComplete="current-password"
            value={formData.confirm_password}
            onChange={handleChange}
            error={Boolean(errors.confirm_password)}
            helperText={errors.confirm_password}
          />

          <Grid className="w-full flex justify-center">
            <FormControlLabel
              className="mb-0 pb-0"
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  value="agree"
                  color="primary"
                />
              }
              label="I agree to terms and conditions"
            />
          </Grid>

          <button
            type="submit"
            className="rounded-[1.25rem] py-3 px-10 w-full bg-[#1380FF] font-[spartan] font-[500] text-[1.2rem] text-[#FFF] uppercase flex justify-center items-center"
          >
            {loading ? (
              <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : (
              "Sign Up"
            )}{" "}
          </button>
          <Grid className="w-full flex justify-center">
            <Typography>
              Already have an account?
              <div
                sx={{ textDecoration: "none" }}
                className="ml-2 cursor-pointer inline-block text-[#1380FF]"
                onClick={() => setSignInPage(true)}
              >
                Sign in
              </div>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
