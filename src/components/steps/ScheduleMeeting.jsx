import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


export default function ScheduleMeeting() {
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
    Choose a date and time where you have at least 30 minutes to discuss your credit goals.
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
           
            <button
              type="submit"
              onClick={() => {
                window.open('https://calendly.com/tgiscaleme', '_blank'); 
              }}
              className="rounded-[1.25rem] py-3 px-10 w-full bg-[#1380FF] font-[spartan] font-[500] text-[1.2rem] text-[#FFF] uppercase"
            >
              Schedule now
            </button>
           
          </Box>
        </Box>
      </Container>
     </Grid>
  );
}
