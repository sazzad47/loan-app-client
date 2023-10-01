import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function PullReport() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid className="px-5">
      <p className="text-[#1E1E1E] text-center font-[Spartan] font-[700] text-[2.25rem]">
        Complete the form below and submit credentials before proceeding
      </p>
      <Container component="main" maxWidth="xs">
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
            <FormControl required variant="standard">
              <InputLabel id="demo-simple-select-standard-label">
                Select report provider
              </InputLabel>
              <Select
                name="report_provider"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select report provider"
              >
                <MenuItem disabled value="">
                  <em>Select from the following </em>
                </MenuItem>
                <MenuItem value="IdentityfyIQ">
                  <div className="w-full flex justify-between">
                    <div> IdentityfyIQ</div>
                    <a
                      href="https://member.identityiq.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      https://member.identityiq.com/{" "}
                    </a>
                  </div>
                </MenuItem>
                <MenuItem value="Smart Credit">
                  <div className="w-full flex justify-between">
                    <div> Smart Credit</div>
                    <a
                      href="https://www.smartcredit.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      https://www.smartcredit.com/{" "}
                    </a>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              required
              variant="standard"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

         
              <TextField
                required
                variant="standard"
                fullWidth
                id="phone_number"
                label="Phone number"
                type="number"
                name="phone_number"
                autoComplete="phone_number"
                autoFocus
              />
              <TextField
                variant="standard"
                fullWidth
                id="security_word"
                label="Security word (optional)"
                type="text"
                name="security_word"
                autoComplete="security_word"
                autoFocus
              />
             {/* <Grid className="mt-[-1rem]">
                <p className="p-0 m-0 text-[#EB6B7A] text-[1rem] font-[400] font-[Spartan]"> "*" indicates required fields</p>
             </Grid> */}

            <button
              type="submit"
              className="rounded-[1.25rem] py-3 px-10 w-full bg-[#1380FF] font-[spartan] font-[500] text-[1.2rem] text-[#FFF] uppercase"
            >
              Submit credentials
            </button>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}
