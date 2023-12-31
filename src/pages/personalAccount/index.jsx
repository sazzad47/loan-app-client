import React, { useEffect, useState } from "react";
import "./style.css";
import Svgs from "./Svgs";
import DoneIcon from "@mui/icons-material/Done";
import SignUp from "../../components/steps/SignUp";
import PullReport from "../../components/steps/PullReport";
import ScheduleMeeting from "../../components/steps/ScheduleMeeting";
import SelectPackage from "../../components/steps/SelectPackage";
import UploadDocuments from "../../components/steps/UploadDocuments";
import PositiveOrFreeze from "../../components/steps/PositiveOrFreeze";
import { Link } from "react-router-dom";
import SignIn from "../../components/steps/SignIn";

const PersonalAccount = () => {
 
  const [activeStep, setActiveStep] = React.useState(()=> {
    return JSON.parse(localStorage.getItem("activeStep")) || 0
  });
  const [signInPage, setSignInPage] = useState(false);

  useEffect(() => {
    console.log("Saving active step:", activeStep); 
    localStorage.setItem("activeStep", activeStep);
  }, [activeStep]);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      heading: signInPage? "Login to your TGIScaleme account" : "Create your TGIScaleme account now !",
      label: signInPage? "Login" : "Enter sign up details",
      component: signInPage? <SignIn setSignInPage={setSignInPage} handleNext={handleNext} /> : <SignUp setSignInPage={setSignInPage} handleNext={handleNext} />,
    },
    {
      heading: "Get credit report",
      label: "Pull report",
      component: <PullReport />,
    },
    {
      heading: "Get Started by Scheduling your Free Credit Consultation.",
      label: "Schedule a meeting",
      component: <ScheduleMeeting />,
    },
    {
      heading:
        "TGI Scale Me invites you to embark on your credit scaling journey today",
      label: "Select Package",
      component: <SelectPackage />,
    },
    {
      heading: "Upload your Verification Documents",
      label: "Upload verification IDs",
      component: <UploadDocuments />,
    },
    {
      heading: "Freeze or make your positive account !",
      label: "Positive account & Freeze account",
      component: <PositiveOrFreeze />,
    },
  ];

  const maxSteps = steps.length;


  return (
    <div className="min-h-screen w-full p-[2rem] sm:p-[3rem] md:p-[5rem]">
   
        <div className="p-[1rem] sm:p-[2rem] items-center w-full flex flex-col gap-[5px] justify-center bg-[#f8f8f8] rounded-[18px]">
          <p className="font-[Spartan] text-[#333] text-[25px] sm:text-[30px] md:text-[55px] font-[400] tracking-normal leading-normal text-center">
            {steps[activeStep].heading}
          </p>
          <p className="text-transparent font-[roboto] text-[20px] sm:text-[25px] font-[400] tracking-normal leading-normal relative text-center">
            <span className="text-[#686565]">
              Please Fill out all necessary{" "}
            </span>
            <span className="text-[#137fff] font-[700]">steps</span>
            <span className="text-[#686565]"> to get started</span>
          </p>
        </div>

      <div className="w-full h-[100px] sm:h-[140px] md:h-[200px] relative mt-3 sm:mt-5">
        <Svgs />
        <div className="w-full h-full z-10 pl-[2rem] pr-[7rem]">
          <div className="w-full h-full relative flex justify-between items-center">
            <div className="absolute w-full h-auto grid grid-cols-6">
              {steps.map((step, index) => {
                return (
                  <div
                    key={index}
                    className="stepper-item flex flex-col gap-4 items-center"
                  >
                    <div className="z-[5] h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                      <div
                        className={`w-[50%] h-[50%] rounded-full ${
                          activeStep <= index - 1
                            ? "bg-[#F1F1F1]"
                            : "bg-[#137fff]"
                        }  flex justify-center items-center`}
                      >
                        {activeStep !== index && (
                          <DoneIcon
                            fontSize="10em"
                            className={`${
                              activeStep <= index - 1
                                ? "text-[#D9D9D9]"
                                : "text-white"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                    <div className="text-white font-[roboto] text-[0.8em] font-semibold tracking-normal leading-normal text-center">
                      {step.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full justify-center mt-[2rem]">
      {steps[activeStep].component}
      </div>

      <div className="w-full flex justify-center mt-[2rem]">
        <div className="flex gap-4">
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className="rounded-[2.0625rem] text-[#333] font-[roboto] text-[1.25rem] bg-[#E9E9E9] py-3 px-10"
          >
            {" "}
            Previous{" "}
          </button>
          {activeStep === maxSteps - 1 ? (
            <Link to="/personal-dashboard">
              <button
                style={{
                  background:
                    "linear-gradient(180deg, #085ABB 0%, #2684FF 100%)",
                }}
                className="rounded-[2.0625rem] text-[#FFF] font-[roboto] text-[1.25rem] py-3 px-10 cursor-pointer"
              >
                Complete
              </button>
            </Link>
          ) : (
            <button
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className="rounded-[2.0625rem] text-[#FFF] font-[roboto] text-[1.25rem] bg-[#333] py-3 px-10"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalAccount;
