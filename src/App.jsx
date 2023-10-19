
import Home from "./pages/home";
import { createContext } from "react";
import { useState } from "react";


import UsersList from "./components/admin/UsersList";
import DisputesPage from "./components/activeDispute/screens/Index/Index";
import AdminLogin from "./components/admin/AdminLogin";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import Recovered from "./components/modals/scoresignup/Recovered";
import OTPInput from "./components/modals/scoresignup/OTPInput";
import Reset from "./components/modals/scoresignup/Reset";
import PersonalAccount from "./pages/personalAccount";
import PersonalDashboard from "./pages/personalDashboard";
import AddUser from "./components/addUser/screens/Index";


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
              <Route path="/personal-dashboard" element={<PersonalDashboard />} />
              <Route path="/admin" element={<PrivateRoute />}>
                <Route path="/admin">
                  <Route index element={<AddUser />} />
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
