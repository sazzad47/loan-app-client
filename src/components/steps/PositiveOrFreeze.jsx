import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Checkbox, FormControlLabel } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const freezeAccounts = [
  {
    id: 1,
    title: "",
    website: "https://optout.lexisnexis.com/",
    url: "https://optout.lexisnexis.com/",
  },
  {
    id: 2,
    title: "",
    website: "https://www.innovis.com/securityFreeze/index",
    url: "https://www.innovis.com/securityFreeze/index",
  },
  {
    id: 3,
    title: "",
    website: "https://consumers.teletrack.com/freeze/",
    url: "https://consumers.teletrack.com/freeze/",
  },
  {
    id: 4,
    title: "",
    website: "https://ars-consumeroffice.com/add",
    url: "https://ars-consumeroffice.com/add",
  },
  {
    id: 5,
    title: "",
    website: "https://clarityservices.com",
    url: "https://clarityservices.com",
  },
  {
    id: 6,
    title: "",
    website: "https://www.chexsystems.com/security-freeze/place-freeze",
    url: "https://www.chexsystems.com/security-freeze/place-freeze",
  },
];

const primaryAccounts = [
  {
    id: 1,
    title: "Build credit with rent",
    website: "Boom (boompay.app)",
    url: "https://www.boompay.app/",
  },
  {
    id: 2,
    title: "Build Credit Safely & Responsibly",
    website: "Kikoff Credit Builder",
    url: "https://kikoff.com/",
  },
  {
    id: 3,
    title: "Build Credit. Build Savings. Build Dreams",
    website: "Self Credit Builder",
    url: "https://www.self.inc/",
  },
  {
    id: 4,
    title: "Get a Credit Builder Loan that Builds Credit and Savings",
    website: "Credit Strong",
    url: "https://www.creditstrong.com/",
  },
  {
    id: 5,
    title: "Improve Your Credit Scores Instantly for Free",
    website: "Experian Boost",
    url: "https://www.experian.com/consumer-products/score-boost.html",
  },
  {
    id: 6,
    title: "Trackit",
    website: "ExtraCredit",
    url: "https://www.credit.com/extracredit/",
  },
  {
    id: 7,
    title: "",
    website: "rentreporters.com",
    url: "https://www.rentreporters.com/",
  },
  {
    id: 8,
    title: "",
    website: "extra.app",
    url: "https://extra.app/",
  },
  {
    id: 9,
    title: "",
    website: "rentalkharma.com",
    url: "https://www.rentalkharma.com/",
  },
  {
    id: 10,
    title: "",
    website: "tomocredit.com",
    url: "https://tomocredit.com/",
  },
  {
    id: 11,
    title: "",
    website: "meetava.com",
    url: "https://www.meetava.com/",
  },
];

export default function PositiveOrFreeze() {
  return (
    <Grid className="px-5">
      <Container component="main" maxWidth="sm">
        <div
          style={{ borderRadius: "0rem 0rem 1.5625rem 1.5625rem" }}
          className="px-3 py-2 font-[Spartan] w-full bg-[#EB6B7A] text-center"
        >
          <p className="text-[#FFF] p-0 m-0 font-[700] text-[1em] text-center">
            {" "}
            Set up{" "}
          </p>
          <p className="text-[#FFF] p-0 m-0 font-[500] text-[0.8em] text-center">
            {" "}
            Primary accounts and be sure to pay them all on time. After setting
            up the primary accounts then place a freeze on all your secondary
            bureaus.{" "}
          </p>
        </div>
        <p className="p-0 mb-0 text-[#686666] text-[0.8em] text-center mt-[2rem] font-[Spartan] font-[400]">
          {" "}
          Choose from the following websites{" "}
        </p>
        <p className="p-0 m-0 text-[#085ABB] text-[1.4em] text-center font-[Spartan] uppercase font-[700]">
          {" "}
          Create your Primary accounts :{" "}
        </p>

        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
          className="flex mt-3 font-[DM Sans]"
        >
          <div
            style={{
              background: "linear-gradient(180deg, #2684FF 0%, #88BFFF 100%)",
            }}
            className="rounded-[0.5rem] rounded-r-none text-[#fff] font-[500] w-[60%] px-3 py-2"
          >
            Primary accounts
          </div>
          <div
            style={{ background: "#fff" }}
            className="flex justify-center items-center rounded-[0.5rem] rounded-l-none text-[#1380FF] font-[500] flex-1"
          >
            Mark when done !
          </div>
        </div>

        <div className="w-full flex flex-col mt-2">
          {primaryAccounts.map((item) => {
            return (
              <div
                key={item.id}
                style={{ borderBottom: "1px solid #929292" }}
                className="py-2 w-full flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <p className="p-0 m-0 text-[#A3A3A3] font-[400] text-[0.8em]">
                    {" "}
                    {item.title}{" "}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="p-0 m-0 text-[#686666] font-[500] text-[1.2em]">
                      {" "}
                      {item.website}{" "}
                    </p>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {" "}
                      <OpenInNewIcon
                        fontSize="0.7em"
                        className="text-[#5083C1] mb-[-0.2rem]"
                      />{" "}
                    </a>
                  </div>
                </div>
                <FormControlLabel
                  className="mr-0 pr-0"
                  control={<Checkbox value="remember" color="primary" />}
                />
              </div>
            );
          })}
          <div className="w-full flex justify-end gap-2 items-center mt-3">
            <button style={{background: "linear-gradient(180deg, #38B000 0%, #3CAA09 100%)", border: "1px solid #D3D3D3"}} className="rounded-[1rem] text-[#F8FAFD] px-3 py-2 font-[DM Sans] font-[500]" > Select all </button>
            <button className="rounded-[1rem] text-[#EB6B7A] px-3 py-2 font-[DM Sans] font-[400]" > Clear all </button>
          </div>
        </div>


        <p className="p-0 m-0 mt-5 text-[#085ABB] text-[1.4em] text-center font-[Spartan] uppercase font-[700]">
          {" "}
          Freeze the Secondary Bureaus :{" "}
        </p>

        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
          className="flex mt-3 font-[DM Sans]"
        >
          <div
            style={{
              background: "linear-gradient(180deg, #2684FF 0%, #88BFFF 100%)",
            }}
            className="rounded-[0.5rem] rounded-r-none text-[#fff] font-[500] w-[60%] px-3 py-2"
          >
            Freeze Account
          </div>
          <div
            style={{ background: "#fff" }}
            className="flex justify-center items-center rounded-[0.5rem] rounded-l-none text-[#1380FF] font-[500] flex-1"
          >
            Mark when done !
          </div>
        </div>

        <div className="w-full flex flex-col mt-2">
          {freezeAccounts.map((item) => {
            return (
              <div
                key={item.id}
                style={{ borderBottom: "1px solid #929292" }}
                className="py-2 w-full flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <p className="p-0 m-0 text-[#A3A3A3] font-[400] text-[0.8em]">
                    {" "}
                    {item.title}{" "}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="p-0 m-0 text-[#686666] font-[500] text-[1.2em]">
                      {" "}
                      {item.website}{" "}
                    </p>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {" "}
                      <OpenInNewIcon
                        fontSize="0.7em"
                        className="text-[#5083C1] mb-[-0.2rem]"
                      />{" "}
                    </a>
                  </div>
                </div>
                <FormControlLabel
                  className="mr-0 pr-0"
                  control={<Checkbox value="remember" color="primary" />}
                />
              </div>
            );
          })}
           <div className="w-full flex justify-end gap-2 items-center my-3">
            <button style={{background: "linear-gradient(180deg, #38B000 0%, #3CAA09 100%)", border: "1px solid #D3D3D3"}} className="rounded-[1rem] text-[#F8FAFD] px-3 py-2 font-[DM Sans] font-[500]" > Select all </button>
            <button className="rounded-[1rem] text-[#EB6B7A] px-3 py-2 font-[DM Sans] font-[400]" > Clear all </button>
          </div>
        </div>
      </Container>
    </Grid>
  );
}
