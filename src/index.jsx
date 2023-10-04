import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Interceptor from "./state/api/Interceptor";
import { persistor, store } from "./state/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const MainApp = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Interceptor />
            <App />
          </PersistGate>
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
