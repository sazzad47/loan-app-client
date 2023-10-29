import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Grid from "@mui/material/Grid";
import magicStar from "../../assets/magic-star.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ColorRing } from "react-loader-spinner";

const apiBaseUrl = process.env.NODE_ENV === "production"
    ? "https://loan-app-server-px1u.onrender.com"
    : "http://localhost:4000"; 

export default function SelectPackage() {
  const [stripe, setStripe] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublishableKey = async () => {
      const { publishableKey } = await fetch(
        `${apiBaseUrl}/payment/config`
      ).then((r) => r.json());

      if (!publishableKey) {
        console.log(
          "No publishable key returned from the server. Please check `.env` and try again"
        );
        alert("Please set your Stripe publishable API key in the .env file");
        return;
      }

      const stripeInstance = await loadStripe(publishableKey, {
        apiVersion: "2020-08-27",
      });

      setStripe(stripeInstance);
    };

    fetchPublishableKey();
  }, []);

  const handleSubmit = async (amount) => {
    setAmount(amount);
    if (!stripe || submitted) {
      console.log("stripe", stripe);
      return;
    }

    setSubmitted(true);

    try {
      setLoading(true);
      const response = await fetch(
        `${apiBaseUrl}/payment/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currency: "USD",
            paymentMethodType: "klarna",
            amount,
          }),
        }
      );
      console.log("response", response);

      const { error: backendError, clientSecret } = await response.json();

      if (backendError) {
        console.log(backendError.message);
        setSubmitted(false);
        return;
      }

      console.log("Client secret returned.");

      const { error: stripeError, paymentIntent } =
        await stripe.confirmKlarnaPayment(clientSecret, {
          payment_method: {
            billing_details: {
              email: "test@gmail.com",
              address: {
                country: "US",
              },
            },
          },
          return_url: `${window.location.origin}/payment`,
        });

      setLoading(false);

      if (stripeError) {
        console.log(stripeError.message);
        setSubmitted(false);
        return;
      }

      console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid className="">
      <div className="px-[5rem]">
        <p className="p-0 m-0 text-[#1E1E1E] text-center font-[Spartan] font-[700] text-[2.25rem]">
          Your journey begins here with TGI Scale Me, the key to scaling up your{" "}
          <span className="text-[#1380FF]"> financial future! </span>
        </p>
        <p className="p-0 m-0 text-[#686666] text-center font-[Spartan] font-[400] text-[1rem]">
          let's start scaling up your credit together.
        </p>
        <div className="w-full flex justify-center mt-3">
          <div
            style={{
              background: "rgba(249, 250, 252, 0.90)",
              boxShadow:
                "0px 10px 34px 0px rgba(104, 102, 102, 0.09), 0px -15px 35px 0px rgba(136, 191, 255, 0.18) inset",
            }}
            className="w-auto text-[#686666] py-1 px-2 rounded-[0.625rem] font-[Spartan] text-[1rem] font-[500]"
          >
            <img
              src={magicStar}
              alt="start"
              className="inline-block mr-2 w-[1rem] h-[1rem]"
            />
            Choose a package that aligns with your goals{" "}
          </div>
        </div>
      </div>
      <Grid sx={{ marginTop: "5rem" }}>
        <div className="w-full flex gap-[3rem] justify-between">
          <div className="plan-1 w-full flex flex-col justify-between">
            <div
              style={{ borderRight: "0.73px solid #929292" }}
              className="package-1 w-full "
            >
              <div className="p-2 pl-3 pt-4 min-h-[20rem]">
                <p className="p-0 m-0 text-[#FFF] text-center text-[0.9em] font-[700] font-[Spartan] uppercase">
                  {" "}
                  Credit Ascend Activator{" "}
                </p>
                <div className="p-0 m-0 text-[#FFF] flex items-start relative">
                  {" "}
                  <div className="absolute flex">
                    {" "}
                    <div className="mt-[0.1rem]">$</div>{" "}
                    <span className="font-[800] font-[Spartan] text-[2em]">
                      {" "}
                      999
                    </span>{" "}
                  </div>{" "}
                  <div className="ml-[5rem] whitespace-normal">
                    {" "}
                    <span className="font-[400] text-[0.7em] ">
                      {" "}
                      One time payment saves you{" "}
                    </span>{" "}
                    <br /> <span className="font-[800] text-[1em]">
                      {" "}
                      $200{" "}
                    </span>{" "}
                  </div>{" "}
                </div>
                <div className="w-full justify-start flex mt-3">
                  {" "}
                  <div className="bg-[#fff] text-[2em] font-[700] px-2 rounded-[0.71981rem]">
                    {" "}
                    OR{" "}
                  </div>{" "}
                </div>
                <div className="text-[#fff] whitespace-normal text-start mt-2">
                  {" "}
                  <span className="font-[400] text-[0.7em] ">
                    {" "}
                    499 down & 3 payments of{" "}
                  </span>{" "}
                  <br /> <span className="font-[800] text-[1em]">
                    {" "}
                    $233{" "}
                  </span>{" "}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col justify-between h-full w-full rounded-[1.18675rem] rounded-t-none"
              style={{ border: "0.73px solid #929292", borderTop: "none" }}
            >
              <div className="p-3 flex flex-col gap-3">
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Comprehensive review of credit reports from all three major
                    bureaus{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Dispute of inaccurate or unverifiable items with credit
                    bureaus (up to 10 items from each bureau){" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Negotiation with creditors to settle or remove negative
                    items{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p> Personalized credit building accounts and strategies </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p> Ongoing progress updates and credit coaching </p>
                </div>
              </div>

              <div className="w-full flex justify-center mb-4">
                <button
                  onClick={() => handleSubmit(999)}
                  className="text-[#737373] cursor-pointer uppercase font-[Spartan] font-[600] px-4 py-2"
                  style={{
                    borderRadius: "1.64319rem 0.45644rem",
                    border: "1px solid #A3A3A3",
                  }}
                >
                  {" "}
                  {(loading && amount ===  999)? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    "Choose Plan"
                  )}{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="plan-2 w-full relative flex flex-col justify-between">
            <div
              style={{ borderRight: "0.73px solid #929292" }}
              className="package-2 w-full absolute top-[-2rem]"
            >
              <div className="p-2 pl-3 pt-4 min-h-[20rem]">
                <p className="p-0 m-0 text-[#FFF] text-center text-[0.9em] font-[700] font-[Spartan] uppercase">
                  {" "}
                  elite credit expansion{" "}
                </p>
                <div className="p-0 m-0 text-[#FFF] flex items-start relative">
                  {" "}
                  <div className="absolute flex">
                    {" "}
                    <div className="mt-[0.1rem]">$</div>{" "}
                    <span className="font-[800] font-[Spartan] text-[2em]">
                      {" "}
                      1499
                    </span>{" "}
                  </div>{" "}
                  <div className="ml-[6rem] whitespace-normal">
                    {" "}
                    <span className="font-[400] text-[0.7em] ">
                      {" "}
                      One time payment saves you{" "}
                    </span>{" "}
                    <br /> <span className="font-[800] text-[1em]">
                      {" "}
                      $250{" "}
                    </span>{" "}
                  </div>{" "}
                </div>
                <div className="w-full justify-start flex mt-3">
                  {" "}
                  <div className="bg-[#fff] text-[2em] font-[700] px-2 rounded-[0.71981rem]">
                    {" "}
                    OR{" "}
                  </div>{" "}
                </div>
                <div className="text-[#fff] whitespace-normal text-start mt-2">
                  {" "}
                  <span className="font-[400] text-[0.7em] ">
                    {" "}
                    749 down & 3 payments of{" "}
                  </span>{" "}
                  <br /> <span className="font-[800] text-[1em]">
                    {" "}
                    $333{" "}
                  </span>{" "}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col justify-between h-full w-full mt-[18rem] rounded-[1.18675rem] rounded-t-none"
              style={{ border: "0.73px solid #929292", borderTop: "none" }}
            >
              <div className="p-3 flex flex-col gap-3">
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    In-depth analysis of credit reports and customized credit
                    improvement plan{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Dispute of multiple inaccurate, outdated, or duplicate items
                    (up to 20 items each bureau){" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Negotiation with creditors to minimize negative impact{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Assistance with debt validation and cease-and-desist letters{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p> Guidance on building positive credit history </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Regular check-ins, credit education resources, and budgeting
                    tips{" "}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center mb-4">
                <button
                  onClick={() => handleSubmit(1499)}
                  className="text-[#FFF] cursor-pointer uppercase font-[Spartan] font-[600] px-4 py-2"
                  style={{
                    borderRadius: "1.64319rem 0.45644rem",
                    background:
                      "linear-gradient(93deg, #FB8500 -31.83%, #FFB703 64.72%, #FFD703 109.68%)",
                  }}
                >
                  {" "}
                  {(loading && amount ===  1499)? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    "Choose Plan"
                  )}{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="plan-3 w-full mr-[2rem] flex flex-col justify-between">
            <div
              style={{ borderRight: "0.73px solid #929292" }}
              className="package-3 w-full"
            >
              <div className="p-2 pl-3 pt-4 min-h-[20rem]">
                <p className="p-0 m-0 text-[#FFF] text-center text-[0.9em] font-[700] font-[Spartan] uppercase">
                  Credit Summit Mastery{" "}
                </p>
                <div className="p-0 m-0 text-[#FFF] flex items-start relative">
                  {" "}
                  <div className="absolute flex">
                    {" "}
                    <div className="mt-[0.1rem]">$</div>{" "}
                    <span className="font-[800] font-[Spartan] text-[2em]">
                      {" "}
                      1799
                    </span>{" "}
                  </div>{" "}
                  <div className="ml-[6rem] whitespace-normal">
                    {" "}
                    <span className="font-[400] text-[0.7em] ">
                      {" "}
                      One time payment saves you{" "}
                    </span>{" "}
                    <br /> <span className="font-[800] text-[1em]">
                      {" "}
                      $200{" "}
                    </span>{" "}
                  </div>{" "}
                </div>
                <div className="w-full justify-start flex mt-3">
                  {" "}
                  <div className="bg-[#fff] text-[2em] font-[700] px-2 rounded-[0.71981rem]">
                    {" "}
                    OR{" "}
                  </div>{" "}
                </div>
                <div className="text-[#fff] whitespace-normal text-start mt-2">
                  {" "}
                  <span className="font-[400] text-[0.7em] ">
                    {" "}
                    1000 down & 3 payments of{" "}
                  </span>{" "}
                  <br /> <span className="font-[800] text-[1em]">
                    {" "}
                    $250{" "}
                  </span>{" "}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col justify-between h-full w-full rounded-[1.18675rem] rounded-t-none"
              style={{ border: "0.73px solid #929292", borderTop: "none" }}
            >
              <div className="p-3 flex flex-col gap-3">
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Thorough examination of credit reports and creation of a
                    strategic credit enhancement plan{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Dispute and challenge of various complex credit issues
                    (unlimited items){" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Intense negotiation with creditors and collection agencies{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p> Personalized debt management guidance </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p> Identity theft resolution assistance, if applicable </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Ongoing credit monitoring and identity protection tips{" "}
                  </p>
                </div>
                <div className="flex gap-2 text-[#737373] font-[500] text-[0.7em]">
                  <ArrowForwardIcon />
                  <p>
                    {" "}
                    Unlimited support and credit education throughout the
                    process{" "}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center mb-4">
                <button
                  onClick={() => handleSubmit(1799)}
                  className="text-[#737373] cursor-pointer uppercase font-[Spartan] font-[600] px-4 py-2"
                  style={{
                    borderRadius: "1.64319rem 0.45644rem",
                    border: "1px solid #A3A3A3",
                  }}
                >
                  {" "}
                  {(loading && amount ===  1799)? (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  ) : (
                    "Choose Plan"
                  )}{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
