import Home from "./pages/home";
import { createContext } from "react";
import { useState } from "react";

import Admin from "./Admin";
import UsersList from "./components/admin/UsersList";
import DisputesPage from "./components/admin/DisputesPage";
import AdminLogin from "./components/admin/AdminLogin";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import Recovered from "./components/modals/scoresignup/Recovered";
import OTPInput from "./components/modals/scoresignup/OTPInput";
import Reset from "./components/modals/scoresignup/Reset";
import PersonalAccount from "./pages/personalAccount";

import Page2 from "./components/personalDashboard/page2";
import Page3 from "./components/personalDashboard/page3";
import Page4 from "./components/personalDashboard/page4";
import Page5 from "./components/personalDashboard/page5";
import Page6 from "./components/personalDashboard/page6";
import PersonalDashboard from "./components/personalDashboard";


export const RecoveryContext = createContext();

function App() {
  const [page, setPage] = useState("login");
  const [emaill, setEmaill] = useState();
  const [otp, setOTP] = useState();
  let elementToDisplay;
  if (page === "otp") {
    elementToDisplay = <OTPInput />;
  } else if (page === "reset") {
    elementToDisplay = <Reset />;
  } else {
    elementToDisplay = <Home />;
    // elementToDisplay = <Home3 />;
    console.log("first");
  }

  console.log(emaill);
  return (
    <>
      <RecoveryContext.Provider
        value={{ page, setPage, otp, setOTP, setEmaill, emaill }}
      >
          <Routes>
            <Route path="/">
              <Route index element={elementToDisplay} />
              <Route path="/personal-account" element={<PersonalAccount />} />
              <Route path="/personal-dashboard">
                  <Route index element={<PersonalDashboard />} />
                  <Route path="page-2" element={<Page2 />} />
                  <Route path="page-3" element={<Page3 />} />
                  <Route path="page-4" element={<Page4 />} />
                  <Route path="page-5" element={<Page5 />} />
                  <Route path="page-6" element={<Page6 />} />
                  <Route path="page-7" element={<Page6 />} />
                  <Route path="page-8" element={<Page6 />} />
              </Route>
              <Route path="/admin" element={<PrivateRoute />}>
                <Route path="/admin">
                  <Route index element={<Admin />} />
                  <Route path="users" element={<UsersList />} />
                  <Route path="disputes" element={<DisputesPage />} />
                </Route>
              </Route>
              <Route path="admin/login" element={<AdminLogin />} />
            </Route>
          </Routes>
      </RecoveryContext.Provider>
    </>
  );
}

export default App;
